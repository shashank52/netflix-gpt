import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black px-12 py-4 rounded-lg hover:bg-opacity-40">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white px-12 py-4 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
