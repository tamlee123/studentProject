import React from "react";

function TagList({ showTag }) {
  return (
    <div className="list">
      {showTag.map((tag) => (
        <button className="tag-butt">{tag.name}</button>
      ))}
    </div>
  );
}

export default TagList;
