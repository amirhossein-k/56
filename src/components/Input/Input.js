import React from "react";
import "../../styles/Input.css";

const Input = ({ children }) => {
  return (
    <>
      <input className="inputstyle" type="text" placeholder={children} />
    </>
  );
};

export default Input;
