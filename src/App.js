import react, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

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

  const [showModal, setShow] = useState(false);

  const handleClick = () => setShow((prev) => !prev);

  const picDetails = (image) => () => {
    console.log("aaaa", image.id);
  };

  return (
    <div className="bg-[#2A1A1F] text-white">
      <h1 className="text-7xl text-center">Picbot</h1>
      {/* // map through all images and set to "image" */}
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images found</h1>
      )}

      {!term && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images found</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Images loading, please wait...
        </h1>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-11/12 overflow-hidden justify-center align-center m-5">
          {images.map((image) => (
            <div onClick={handleClick(image)}>
              <ImageCard
                key={image.id}
                //set image as a prop
                image={image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
