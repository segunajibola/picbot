import React from "react";

const Modal = ({ images }) => {
  console.log("this", images)
  return (
    <div>
      <div className="absolute text-red-500 w-screen h-screen bg-green-500">
        <h1 className="text-2xl text-center">{images.id}</h1>
      </div>
    </div>
  );
};

export default Modal;
