import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddTagForm from "./AddTagForm";
import TagList from "./TagList";
// import useCreateTagState from "./../hook/useCreateTagState";
function ProfileCard({
  icon,
  fullName,
  email,
  company,
  skill,
  grades,
  average,
  addTag,
  createTag,
  studentId,
  studentTagMap,
}) {
  const [active, setActive] = useState("false");
  const toggle = () => {
    setActive(!active);
  };
  // const initialTag = [];
  // const { createTag, addTag } = useCreateTagState(initialTag);
  const handleAddTag = (tagName) => {
    addTag(studentId, tagName);
  };
  return (
    <div className="card-profile">
      <div className="pic">
        <img src={icon} alt="student icon" />
      </div>

      <div className="student-info">
        <div className="button">
          {active ? (
            <IconButton onClick={toggle}>
              <AddIcon style={{ fontSize: "40px" }} />
            </IconButton>
          ) : (
            <IconButton onClick={toggle}>
              <RemoveIcon style={{ fontSize: "40px" }} />
            </IconButton>
          )}
        </div>
        <div className="detail">
          <h1 className="fullName">{fullName.toUpperCase()}</h1>

          <div className="information">
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {average} %</p>
            <p>
              {!active ? (
                <div>
                  {grades.map((score) => (
                    <ul className="score">{`Test ${
                      grades.indexOf(score) + 1
                    } \u00A0\u00A0\u00A0\u00A0${score} `}</ul>
                  ))}
                </div>
              ) : null}
            </p>
          </div>
          <TagList
            showTag={
              createTag
                ? createTag.filter((tag) =>
                    studentTagMap[studentId]?.includes(tag.name)
                  )
                : []
            }
          />
          <AddTagForm addTag={handleAddTag} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
