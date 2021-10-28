import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const [profile, setProfile] = useState({ students: [] });

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
  const average = (items) => {
    console.log({ items: items });
    const output = [];
    for (let element of items) output.push(element);
    const sum = output.reduce((a, c) => {
      return parseInt(a) + parseInt(c);
    }, 0);
    const total = sum / output.length;
    return total;
  };
  return (
    <div className="App">
      {profile.students.map((student) => (
        <div className="displayCard">
          <ProfileCard
            icon={student.pic}
            firstName={student.firstName}
            lastName={student.lastName}
            email={student.email}
            company={student.company}
            skill={student.skill}
            average={average(student.grades)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
