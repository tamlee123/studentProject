import React from "react";
import List from "@material-ui/core/List";
import ToAdd from "./ToAdd";
function TagList({ showTag }) {
  return (
    <div className="list">
      <List>
        {showTag.map((nameTag) => (
          <ToAdd {...nameTag} key={nameTag.id} />
        ))}
      </List>
    </div>
  );
}

export default TagList;
