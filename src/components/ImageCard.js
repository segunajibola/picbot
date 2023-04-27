import React from 'react';

const ImageCard = ({ image }) => {

    const tags = image.tags.split(",");

    return (
        <div className="grid grid-gap-2 max-w-12 md:max-w-96 md:max-h-full overflow-hidden shadow-white shadow-lg border-sky-500 rounded-sm my-4">
        <img src={image.webformatURL} alt="" className="w-full h-72 object-cover object-center"/>
        <div className="px-6 py-2">
          <div className="font-bold text-indigo-500 text-xl mb-2">
          Photo by {image.user}
          </div>
        </div>
        {/* <div className="px-6 py-3">
            {tags.map((tag, index) => (
               <span key={index} className="inline-block bg-gray-200 rounded-ful px-3 py-1 text-sm font-semi-bold text-gray-700 m-1">
            {`${index + 1} - ${tag}`}
          </span> 
            ))}
         
        </div> */}
    </div>
    )
}

export default ImageCard