import React from "react";


const Modal = ({ currentImg }) => {

const { id, webformatURL } = currentImg;

  console.log("this", id);
  return (
    <div className="">
      <div className="fixed z-10 text-red-500 w-32 h-64 bg-green-500">
        <h1 className="text-2xl text-center">{id}</h1>
        <img className="" src={webformatURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
