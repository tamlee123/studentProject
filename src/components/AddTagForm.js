import React from "react";
// import TextField from "@material-ui/core/TextField";
import useInputState from "./../hook/useInputState";

function AddTagForm({ addTag }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <div>
      <form
        style={{ border: "none", width: "10rem", marginLeft: "2rem" }}
        onSubmit={(e) => {
          e.preventDefault();
          addTag(value);
          reset();
        }}
      >
        <input
          value={value}
          onChange={handleChange}
          placeholder="Add a tag"
        ></input>
      </form>
    </div>
  );
}

export default AddTagForm;
