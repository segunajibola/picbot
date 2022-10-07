import react, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

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
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((photos) => {
        setImages(photos.hits); //set images here
        console.log(images);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="bg-[#2A1A1F] text-white">
      <h1 className="text-7xl">Picbot</h1>
      {/* // map through all images and set to "image" */}
      <ImageSearch searchText={(text) => setTerm(text)} />

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
