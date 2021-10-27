import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({ students: [], grades: [] });

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
    const output = [];
    for (let element of items) output.push(element);
    const sum = output.reduce((a, c) => {
      return a + c;
    }, 0);
    const total = sum / output.length;
    return total;
  };
  return (
    <div className="App">
      {profile.students.map((student) => (
        <div>
          <img src={student.pic} alt="icon" />
          <h3>
            {student.firstName} {student.lastName}
          </h3>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {average(student.grades).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
