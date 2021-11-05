import React from "react";
import useInputState from "./../hook/useInputState";

function AddTagForm({ addTag }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <div>
      <form
        className="tag-form"
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
