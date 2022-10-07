import react, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
// import ImageSearch from "./components/ImageSearch";

// async function getPhotos() {
//   let response = await fetch(
//     `https://pixabay.com/api/?key=${process.env.API_KEY}&q=yellow+flowers&image_type=photo`
//   );
//   let photos = await response.json();
//   return photos.hits;
// }

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo`
    )
      .then((res) => res.json())
      .then((photos) => {
        setImages(photos.hits); //set images here
        console.log(images)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  console.log("here", process.env);

  // function getMyPhotosHtml(photos) {
  //   let myPhotosHtml = photos
  //     .map((photo) => {
  //       return `<img class="my-photo" src="${photo.webformatURL}" alt="${photo.user}" />`;
  //     })
  //     .join("");
  //   return `<div class="my-photos">${myPhotosHtml}</div>`;
  // }

  // getPhotos().then((photos) => {
  //   let myPhotosHtml = getMyPhotosHtml(photos);
  //   console.log(photos);
  //   document.body.innerHTML = `<div class="my-gallery">
  //         <img id="my-selected-photo" class="my-photo" src="${photos[0].largeImageURL}" />
  //         <div class="par">All Images: Select any images below to highlight</div>
  //         ${myPhotosHtml}
  //     </div>`;

  //   let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"));
  //   let topPhoto = document.getElementById("my-selected-photo");

  //   myPhotoImgs.forEach((photoImg) => {
  //     photoImg.addEventListener("click", (e) => {
  //       topPhoto.src = photoImg.src;
  //       topPhoto.style.display = "block";
  //     });
  //   });
  // });

  return (
    <div className="bg-[#2A1A1F]">
      <div>
        <h1 className="text-7xl">
          Picbot
        </h1>
        <div className="text-center m-10 flex flex-col space-y-3">
          <h1 className="text-2xl">
          What picture would you like to see?
        </h1>
        <input className="w-1/2 m-auto text-black" type="text" />
      </div>
      
      {/* // map through all images and set to "image" */}
      <div className="my-photos">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            //set image as a prop
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
