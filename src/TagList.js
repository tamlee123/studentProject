import React from "react";
import List from "@material-ui/core/List";
import ToAdd from "./ToAdd";
function TagList({ showTag }) {
  return (
    <div className="list">
      <List>
        {showTag.map((nameTag, i) => (
          <ToAdd {...nameTag} key={nameTag.i} />
        ))}
      </List>
    </div>
  );
}

export default TagList;
