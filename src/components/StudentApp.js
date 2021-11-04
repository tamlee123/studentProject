import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
// import useInputState from "./../hooks/useInputState";
import useCreateTagState from "./../hook/useCreateTagState";

function StudentApp(props) {
  const [profile, setProfile] = useState({ students: [] });
  const [q, setQ] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const initialTag = [];
  const { createTag, addTag, studentTagMap } = useCreateTagState(initialTag);
  //fetching data from api
  useEffect(() => {
    async function getStudents() {
      const res = await axios.get(
        "https://api.hatchways.io/assessment/students"
      );

      setProfile(res.data);
      console.log(res);
    }
    getStudents();
  }, []);

  //calculate average using reduce for sum
  const average = (items) => {
    const sum = items.reduce((a, c) => {
      return parseInt(a) + parseInt(c);
    });
    const total = sum / items.length;
    return total;
  };

  const filterData = () =>
    profile.students
      .filter(({ firstName = "", lastName = "" }) => {
        return [firstName, lastName, `${firstName} ${lastName}`].some(
          (newItem) => {
            return (
              newItem.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
            );
          }
        );
      })
      .filter(filterTag);
  const filterTag = (student) => {
    const tags = studentTagMap[student.id];
    console.log({ tags });
    return !searchTag || !tags || tags.includes(searchTag);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search by name"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
        }}
      />
      <input
        type="search"
        placeholder="Search by tag"
        value={searchTag}
        onChange={(e) => {
          setSearchTag(e.target.value);
        }}
      />
      <hr />

      {filterData(profile).map((item, index) => (
        <div className="displayCard" key={index}>
          <ProfileCard
            icon={item.pic}
            fullName={item.firstName + " " + item.lastName}
            email={item.email}
            company={item.company}
            skill={item.skill}
            grades={item.grades}
            average={average(item.grades)}
            addTag={addTag}
            createTag={createTag}
            studentId={item.id}
            studentTagMap={studentTagMap}
          />
        </div>
      ))}
    </div>
  );
}

export default StudentApp;
