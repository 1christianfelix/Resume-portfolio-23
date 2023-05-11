import React, { useEffect } from "react";
import { useState } from "react";

const Project = (props) => {
  const [currentImage, setCurrentImage] = useState(props.default);
  const images = props.images || [props.demo]; // Use the demo image as a fallback

  const prevImage = () => {
    setCurrentImage((currentImage + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <section className="flex flex-col h-[100%]">
      <div className="Preview-Vid h-[70%]  relative">
        {images.length > 1 ? (
          <img
            src={images[currentImage]}
            alt=""
            className="absolute h-[80%] left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%]"
          />
        ) : (
          <img
            src={images[0]}
            alt=""
            className="absolute h-[80%] left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%]"
          />
        )}
        {images.length > 1 && (
          <div className="absolute top-0 bottom-0 left-20 right-20 flex items-center justify-between">
            <button
              onClick={prevImage}
              className="bg-gray-400 text-white px-2 py-1 rounded-full hover:bg-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  fill="currentColor"
                  d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L9.83 12l5.58-5.59z"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="bg-gray-400 text-white px-2 py-1 rounded-full hover:bg-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  fill="currentColor"
                  d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L14.17 12l-5.58 5.59z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="border-slate-300 border-t-[1px] h-[30%] px-10 overflow-auto">
        <div className="pb-[1%]">{props.project_name}</div>
        <div>
          Learn More:{" "}
          <a href={props.link} className="hover:text-blue-600 underline">
            Gitlab
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
