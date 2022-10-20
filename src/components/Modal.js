import React from "react";

const Modal = ({ currentImg, setModal }) => {
  const { id, webformatURL, user, comments, downloads, likes } = currentImg;

  console.log("this", id);

  return (
    <>
      <div className="fixed w-8/12 h-4/6 bg-green-400 p-5">
        <div
          onClick={() => {
            setModal((prev) => !prev);
          }}
          className="absolute top-0 cursor-pointer text-2xl"
        >
          x
        </div>

        <div className="flex justify-center items-center text-red-500">
          <div className="place-items-center content-center justify-self-center justify-center place-self-center place-items-center justify-items-center items-center align-center">
            <img className="h-[350px]" src={webformatURL} alt="" />
          </div>
          <div className="flex-col p-10 space-y-4 text-xl">
            <h1>Photo by {user}</h1>
            <h1>Comment: {comments}</h1>
            <h1>Download: {downloads}</h1>
            <h1>Likes: {likes}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
