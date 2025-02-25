import React, { useState } from "react";

const videos = [
  "https://www.youtube.com/embed/HpWLHxfCm9g?si=opvUg5HR8O7lGEPw",
  "https://www.youtube.com/embed/GM9q2R3Pgrk?si=fUzkxA-hGMNtqTlZ",
  "https://www.youtube.com/embed/V1lDlBnstYk?si=cDxBruc8x_P2y-gB",
  "https://www.youtube.com/embed/6w5pG8ly-CA?si=i7D3hOSlpHFUL6YM",
  "https://www.youtube.com/embed/ByrD1tWo06w?si=-IAmndO60i1Vvti3",
  "https://www.youtube.com/embed/q5wXFzrV7tM?si=HY_LQxP2URaDqKbG",
  "https://www.youtube.com/embed/lS7SQm-JDzs?si=7aNiWMaC-AILPwMy",
  "https://www.youtube.com/embed/PY_AZf7-Bc0?si=pSPDmk8TgQETtV4d",
  "https://www.youtube.com/embed/ApYWTTRJjbQ?si=vuEf4-UboJFOb8Tt",
  "https://www.youtube.com/embed/2Y071vHAANE?si=AmLL0FD0bxwBe6AE",
  "https://www.youtube.com/embed/_J3Jv3sCUQI?si=dQstgXO_bwyW5qWb",
];

const VideosPage = () => {

  const [loaded, setLoaded] = useState(Array(videos.length).fill(false));

  const handleLoad = (index) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-brown-25 text-center mb-6">Latest Videos</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 mt-[5rem] md:grid-cols-1 gap-6 space-y-[7rem]">
        {videos.map((video, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg relative">
            {!loaded[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></span>
              </div>
            )}
            <iframe
              className="w-[40rem] md:w-[40rem] sm:w-[30rem] xs:w-[25rem] h-80"
              src={video}
              title={`Video ${index + 1}`}
              allowFullScreen
              onLoad={() => handleLoad(index)}
            ></iframe>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <a
          href="https://www.youtube.com/@sanvenk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 mt-[5rem] mb-[2rem] border-2 border-brown-5 text-brown-5 font-bold text-lg rounded-lg hover:bg-red-700 hover:border-2 rounded-xl hover:border-brown-100 hover:text-brown-100 transition"
        >
          Watch More on YouTube
        </a>
      </div>
    </div>
  );
};

export default VideosPage;
