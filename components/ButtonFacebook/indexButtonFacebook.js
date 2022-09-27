import React from "react";

export default function ButtonFacebook(props) {
  const { width, height, title, fontSize, background, handleClick } = props;
  const login = () => {
    handleClick();
  };
  const register = () => {
    console.log("first");
  };
  return (
    <button
      className="pl-2 pr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      style={{
        width: width ? width : "100%",
        height: height ? height : "50px",
        fontSize: fontSize ? fontSize : "25px",
        background: background ? background : "#1178f2",
      }}
      onClick={handleClick ? login : register}
    >
      {title}
    </button>
  );
}
