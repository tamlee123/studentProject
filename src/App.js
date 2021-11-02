import axios from "axios";
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({ students: [] });
  const [q, setQ] = useState("");

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
    profile.students.filter(({ firstName = "", lastName = "" }) => {
      return [firstName, lastName, `${firstName} ${lastName}`].some(
        (newItem) => {
          return newItem.toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
        }
      );
    });

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search by name"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
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
          />
        </div>
      ))}
    </div>
  );
}

export default App;
