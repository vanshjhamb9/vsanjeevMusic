import React from "react";
import image from "../assets/993A0541.jpg";

const Awards = () => {
  const awardsData = [
    {
      title: "Shanmukha Sangeeth Shiromani Award ",
      event: "– Shanmukhananda Sangeetha Sabha",
      year: 2014,
    },
    {
      title: "Yagnaraman Award of Excellence ",
      event: "– Krishna Gana Sabha ",
      year: 2016,
    },
    {
      title: "Bronze Medal for Original Score (Lost in Harmony)",
      event: "– Global Music Festival, Los Angeles",
      year: 2024,
    },
    {
      title: "Best Musical  (Lost in Harmony)",
      event: "– Europe Music Awards",
      year: 2024,
    },
    {
      title: "Best Score of the Month (March 2024)",
      event: "– American Tracks Music Awards",
      year: 2024,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold p-8 border-b-2 border-white text-center mb-10">
        Awards & Recognition
      </h1>
      <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse">
        <div className="space-y-8 lg:p-[4rem] md:p-[4rem] sm:p-[2rem] xs:p-[1rem] mt-[8rem]">
          {awardsData.map((award, index) => (
            <div key={index} className="border-l-4 border-yellow-500 pl-4">
              <h2 className="text-2xl font-semibold">{award.title}</h2>
              <p className="text-lg text-gray-300">
                {award.event}, {award.year}
              </p>
            </div>
          ))}

          {/* ICMA Finalist Badge Embed */}
          <div className="mt-10">
            <a
              href="https://www.intercontinentalmusicawards.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Proud ICMA 2025 Winner"
            >
              <img
                src="https://www.intercontinentalmusicawards.com/wp-content/uploads/2025/08/ICMA-Winner-Badge.png"
                alt="2025 ICMA Finalist Badge"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </a>
          </div>
        </div>

        <div className="lg:w-[70%] md:w-[70%] sm:w-[80%] xs:w-[100%]">
          <img src={image} alt="Awards Showcase" />
        </div>
      </div>

      <div className="lg:p-[4rem] md:p-[4rem] sm:p-[2rem] xs:p-[1rem]">
        <h2 className="text-3xl font-bold mt-12">Media Coverage</h2>
        <div className="mt-6 space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-2xl font-semibold">
              Lost in Harmony: A Tribute to Nature
            </h3>
            <p className="text-lg text-gray-300">
              The Hindu highlights Sanjeev Venkataramanan’s award-winning short
              film,
              <span className="font-semibold"> Lost in Harmony</span>, which
              beautifully captures the mystical sounds and visuals of South
              India’s forests.
            </p>
            <a
              href="https://www.thehindu.com/entertainment/music/violinist-sanjeev-venkataramanans-film-lost-in-harmony-celebrates-nature-through-music/article68224079.ece"
              className="text-brown-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More (The Hindu)
            </a>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-2xl font-semibold">
              World Environment Day Feature
            </h3>
            <p className="text-lg text-gray-300">
              The Times of India covers the screening of{" "}
              <span className="font-semibold">Lost in Harmony</span> on World
              Environment Day, showcasing the connection between music and
              nature.
            </p>
            <a
              href="https://timesofindia.indiatimes.com/life-style/spotlight/world-environment-day-nature-and-wildlife-deserve-our-protection-and-conservation/amp_articleshow/110724602.cms"
              className="text-brown-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More (Times of India)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
