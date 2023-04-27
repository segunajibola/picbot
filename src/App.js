import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Modal from "./components/Modal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [modal, setModal] = useState("");
  const [currentImg, setCurrentImg] = useState([]);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((photos) => {
        setImages(photos.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const handleClick = (index) => {
    setCurrentImg(images[index]);
    setModal(true);
  };

  return (
    <div className={`bg-gradient-to-r from-sky-800 to-indigo-800 pb-20 text-sky-100 ${isLoading ? 'h-screen' : 'h-full'}`}>
      {/* {`overflow-hidden ${darkMode ? "dark" : ""}`} */}
      <div className="flex justify-between items-center">
        <h1 className="text-5xl md:text-3xl inline text-center m-4">PicBot</h1>
        <a href="https://github.com/segunajibola/picbot">
          <span className="inline h-4 m-10 text-3xl">
            <FaGithub />
          </span>
        </a>
      </div>

      <ImageSearch searchText={(text) => setTerm(text)} images={images} />

      {!term && images.length === 0 && (
        <h1 className="text-xl text-center">
          Enter an object or animal you would like generate  above.😊 
        </h1>
      )}

      {term && images.length === 0 && (
        <h1 className="text-xl text-center text-sky-100 my-10">
          No Images was found. Enter a valid picture name.
        </h1>
      )}

      {modal && (
        <div className="fixed inset-8 bg-green-100 z-10 m-auto w-[24rem] md:w-[60rem] h-[25rem] md:h-[30rem] justify-center items-center flex rounded-lg">
          <Modal
            key={currentImg.id}
            setModal={setModal}
            images={images}
            currentImg={currentImg}
            term={term}
          />
        </div>
      )}

      {term && isLoading ? (
        <h1 className="text-2xl text-center mx-auto my-10">
          Images loading, It might take a while...
        </h1>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-11/12 overflow-hidden justify-center align-center m-5">
          {images.map((image, index) => (
            <div
              onClick={() => {
                handleClick(index);
              }}
              key={image.id}
            >
              <ImageCard key={image.id} image={image} />
            </div>
          ))}
        </div>
      )}

      {/* {modal ? <Modal key={selectedImg.id} images={selectedImg} /> : ""} */}
    </div>
  );
}

export default App;
