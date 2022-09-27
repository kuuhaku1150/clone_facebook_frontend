import React from "react";

export default function TextInputPost(props) {
  const { placeholder, handleChange, value, width, height } = props;
  const handleChangeTest = () => {
    console.log("test");
  };
  return (
    <input
      className="flex ml-2 mr-2 items-center bg-transparent outline-none placeholder-gray-500"
      style={{
        width: width ? width : "100%",
        height: height ? height : "30px",
      }}
      type="text"
      value={value ? value : ""}
      placeholder={placeholder ? placeholder : ""}
      onChange={handleChange ? handleChange : handleChangeTest}
    />
  );
}
