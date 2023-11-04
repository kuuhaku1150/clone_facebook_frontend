import React from "react";

export default function ButtonFacebook(props) {
  const {
    width,
    height,
    title,
    fontSize,
    background,
    handleClick,
    showModal,
    handleRegister,
  } = props;
  const login = () => {
    handleClick();
  };
  const register = () => {
    if (showModal) {
      showModal();
    }
    if (handleRegister) {
      handleRegister();
    }
  };
  return (
    <button
      className="pl-2 pr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center "
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
