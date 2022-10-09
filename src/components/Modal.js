import React from "react";

const Modal = ( image ) => {
  return (
    <div>
      <div className="text-red-500 w-screen h-screen bg-white">
        <h1>{image.id}</h1>
      </div>
    </div>
  );
};

export default Modal;
