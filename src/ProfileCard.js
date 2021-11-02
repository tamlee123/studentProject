import React from "react";

function ProfileCard({
  icon,
  fullName,
  //   firstName,
  //   lastName,
  email,
  company,
  skill,
  average,
}) {
  return (
    <div className="card-profile">
      <div className="pic">
        <img src={icon} alt="student icon" />
      </div>
      <div className="student-info">
        <h1>{fullName.toUpperCase()}</h1>
        <div className="information">
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {average} %</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
