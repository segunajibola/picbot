import { saveAs } from "file-saver";
import { GrDownload } from "react-icons/gr";

const Modal = ({ currentImg, setModal, term }) => {
  const { id, webformatURL, user, comments, downloads, likes } = currentImg;

  const downloadImage = () => {
    saveAs(webformatURL, `${term}.jpg`);
  };

  return (
    <>
      <div className="fixed w-[23rem] md:w-8/12 h-[370px] md:h-4/6 bg-green-400 p-2 rounded-lg">
        <div
          onClick={() => {
            setModal((prev) => !prev);
          }}
          className="absolute top-1 md:top-6 right-8 cursor-pointer text-3xl drop-shadow-lg text-black"
        >
          x
        </div>

        <div className="flex bg-green-200 h-[355px] md:h-[430px] justify-center items-center text-red-500 p-5 rounded-lg">
          <div>
            <img
              className="h-[330px] md:h-[350px] rounded-lg"
              src={webformatURL}
              alt=""
            />
          </div>
          <div className="h-full p-2 pb-0 md:p-10 space-y-4 md:space-y-4 text-xl">
            <h1>Comment: {comments}</h1>
            <h1>Download: {downloads}</h1>
            <h1 className="pb-[100px] md:pb-10">Likes: {likes}</h1>
            <p
              className="border-[2px] border-green-400 cursor-pointer text-sm md:text-md"
              onClick={downloadImage}
            >
              Download <GrDownload className="inline" />
            </p>
          </div>
        </div>
        {/* https://pixabay.com/get/g67a77788615563bdf792cdfb51d9318310fdbd263d119ae0d2ede9c7a23adec96549501e8f1c4e802b95095ddea785f39ac815ccbcb2bf90fafc1133ed822309_640.jpg */}
      </div>
    </>
  );
};

export default Modal;
