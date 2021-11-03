import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hook/useInputState";

function AddTagForm({ addTag, showTag }) {
  const [value, handleChange, reset] = useInputState([]);
  return (
    <div>
      <div>{showTag}</div>
      <form
        style={{ border: "none", width: "10rem" }}
        onSubmit={(e) => {
          e.preventDefault();
          addTag(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          label="Add a tag"
        ></TextField>
      </form>
    </div>
  );
}

export default AddTagForm;
