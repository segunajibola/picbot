import React, { useState } from "react";

const ImageSearch = ({ searchText, images }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className="text-center m-5 md:m-10 md:mx-10 flex flex-col space-y-3">
      <form onSubmit={onSubmit} className="flex space-x-1 mx-auto">
        <input
          onChange={(e) => setText(e.target.value)}
          className=" text-sky-900 rounded-md w-96 outline-0 text-2xl p-2 text-center"
          placeholder="Enter an Image to be generated"
          type="text"
        />
        <button className="w-40 md:16 bg-sky-500 hover:bg-sky-600 border-white text-md lg:text-xl border-[2px] text-white hover:text-black py-1 px-1 rounded-md font-semibold">
          Search
        </button>
      </form>
      {images.length && <p className="p-3 text-2xl w-24">Click each image to see more details.</p>}
    </div>
  );
};

export default ImageSearch;
