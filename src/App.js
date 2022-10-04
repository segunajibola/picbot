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
    <>
      <h1 className="text-red-500">Hello, World</h1>
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
    </>
  );
}

export default App;
