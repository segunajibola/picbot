import React from "react";

const Modal = ({ id, webformatURL }) => {
  console.log("this", id)
  return (
    <div>
      <div className="absolute z-10 text-red-500 w-screen h-screen bg-green-500">
        <h1 className="text-2xl text-center">{id}</h1>
        <img className="" src={webformatURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
