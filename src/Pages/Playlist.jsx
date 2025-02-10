import React from "react";

const YouTubePlaylists = () => {
  // Replace with actual YouTube Playlist IDs
  const playlists = [
    { id: "PL4ElKbuYzTm8IS3OSb77BmQbmovJENJmu", title: "Mix and Match - Dance Suite" },
    { id: "PL4ElKbuYzTm8Q0L2dkoX8mEyQoTr74JGi", title: "Yours Chordially-V Sanjeev" },
    { id: "PL4ElKbuYzTm9IX9tpP6gmev11Z1G-cwUp", title: "Rakti" },
    { id: "PL4ElKbuYzTm9mwSKsF42EfK7MGizMKbJK", title: "Krithis" },
    { id: "PL4ElKbuYzTm-xUVZXdJwbSgWPhW7-7tEh", title: "Alapanas" },
    { id: "PL4ElKbuYzTm9DLrWykCb9zgWUs_rjCGij", title: "Compositions" }

  ];

  return (
    <div className="container w-full text-center mx-auto lg:p-6 md:p-6 sm:p-2 xs:p-2">
      <h2 className="text-3xl font-bold mb-4 mx-auto text-brown-50">YouTube Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-[3rem] md:p-[3rem] sm:p-[1rem] xs:p-[1rem]">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 lg:p-4 md:p-4 sm:p-1 xs:p-1 lg:mt-[1rem] md:mt-[1rem] xs:mt-[3rem] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">{playlist.title}</h3>
            <iframe
              className="w-full lg:w-full md:w-full sm:w-[120%] xs:w-[110%] h-64 rounded-lg"
              src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
              
              title={playlist.title}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://www.youtube.com/@sanvenk/playlists"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 mt-[5rem] mb-[2rem] border-2 border-brown-5 text-brown-5 font-bold text-lg rounded-lg hover:bg-red-700 hover:border-2 rounded-xl hover:border-brown-100 hover:text-brown-100 transition"
         >
          View All Playlists on YouTube
        </a>
      </div>
    </div>
  );
};

export default YouTubePlaylists;
