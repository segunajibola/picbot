import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className="text-center m-5 md:m-10 flex flex-col space-y-3">
      <h1 className="text-2xl">What picture do you want to see?</h1>
      <form onSubmit={onSubmit} className="flex space-x-3">
        <input
          onChange={(e) => setText(e.target.value)}
          className="w-5/6 text-black rounded-md h-12 outline-0 text-2xl p-2 text-center"
          placeholder="flowers"
          type="text"
        />
        <button className="w-1/6 bg-[#2A1A1F] hover:bg-white border-white text-lg md:text-2xl border-4 text-white hover:text-black py-1 px-2 rounded-md">
          Search
        </button>
      </form>
      <p>Click each image to see more details.</p>
    </div>
  );
};

export default ImageSearch;
