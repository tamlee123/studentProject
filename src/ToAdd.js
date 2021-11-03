import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
function ToAdd({ name }) {
  return (
    <ListItem>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  );
}

export default ToAdd;
