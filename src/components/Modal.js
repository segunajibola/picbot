import React from "react";

const Modal = ({ currentImg, setModal }) => {
  // const hide = () => {
  //   setModal((prev) => !prev)
  //   };

  const { id, webformatURL } = currentImg;

  console.log("this", id);

  return (
    <div className="fixed flex flex-col justify-center items-center text-red-500 w-9/12 h-4/6 bg-green-500">
      <div onClick={() => {setModal((prev) => !prev)}} className="cursor-pointer">x</div>
      <h1 className="text-2xl text-center">{id}</h1>
      <img className="" src={webformatURL} alt="" />
    </div>
  );
};

export default Modal;
