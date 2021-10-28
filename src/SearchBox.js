import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      placeholder="Search by name"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};
<hr />;
export default SearchBox;
