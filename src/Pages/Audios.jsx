import React from "react";

const tracks = [
  {
    title: "Malare - V.Sanjeev",
    spotifyUrl: "https://open.spotify.com/embed/track/1ZDiBP33aBD82QORUFDI88?utm_source=generator&theme=0",
  },
  {
    title: "Magale Kanmaniye",
    spotifyUrl: "https://open.spotify.com/embed/track/5m9t5N7un1vaMo2EEkQtKF?utm_source=generator&theme=0",
  },
  {
    title: "Ragam - Thodi",
    spotifyUrl: "https://open.spotify.com/embed/track/3PcVb2yJw1JnsBNdglcZ2O?utm_source=generator",
  },
  {
    title: "Varnam - Behak - Adi",
    spotifyUrl: "https://open.spotify.com/embed/track/135vguAfs7e6gu4jPM2kTF?utm_source=generator",
  },

  {
    title: "Lost in Harmony",
    spotifyUrl: "https://open.spotify.com/embed/track/1sxAklqJ7WiNGxhMr5ZtoS?utm_source=generator",
  },
  {
    title: "The Symphony of the Wild",
    spotifyUrl: "https://open.spotify.com/embed/track/2Z0ZumtckDiEJ9HJvj5C0r?utm_source=generator",
  },
  {
    title: "Jab Jab Murali-Dvijavanthi-Adi",
    spotifyUrl: "https://open.spotify.com/embed/track/1piwPbRdgpdoOWb2KXsr2i?utm_source=generator&theme=0",
  },
  {
    title: "Bhagaynaiya - Chandrajyothi-Adi",
    spotifyUrl: "https://open.spotify.com/embed/track/1nw4sD68x8vahwrZvcbhPY?utm_source=generator&theme=0",
  },
  {
    title: "Thilana -Pahadi-Adi",
    spotifyUrl: "https://open.spotify.com/embed/track/7djRfBGDHNGM78nkavzQN4?utm_source=generator",
  },
  {
    title: "Ninnunera -Devamanohari-Adi",
    spotifyUrl: "https://open.spotify.com/embed/track/0yfmkt9AGjcGPO7bsevH6O?utm_source=generator",
  },
];

const AudioPage = () => {
  return (
    <div className="container mx-auto p-[3rem] md:p-[3rem] sm:p-[1rem] xs:p-[1rem] mb-[6rem] text-center">
      <h1 className="text-3xl text-brown-25 font-bold mb-6">Music & Audio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[4rem]">
        {tracks.map((track, index) => (
          <div key={index} className="p-4 md:p-4 sm:p-2 xs:p-0 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl text-brown-25 font-semibold mb-2">{track.title}</h2>
            <iframe
              src={track.spotifyUrl}
               className="w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[20rem] h-[26rem]"
               frameBorder="0" 
               allowfullscreen=""
               allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://open.spotify.com/artist/116P1Hzh4SnY9KN2tAkAR2?si=ui8lXPYnTdOhCKp9SUhePg"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 mt-[5rem] border-2 border-brown-5 mb-[2rem] text-brown-5 font-bold text-lg rounded-lg hover:bg-red-700 hover:border-2 rounded-xl hover:border-brown-100 hover:text-brown-100 transition"
        >
         Listen on Spotify
        </a>
      </div>
    </div>
  );
};

export default AudioPage;
