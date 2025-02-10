import React from "react";
import image1 from "../assets/993A0545-Enhanced-NR.jpg"
import image2 from "../assets/993A0591.jpg"
import image3 from "../assets/993A0539.jpg"

const compositions = [
  {
    title: "Mix and Match (2024)",
    description:
      "A dance suite comprising 11 pieces, centered on India’s rich saree-weaving traditions. Premiered in Delhi by Bharatanatyam exponent Mrs. Jayalakshmi Eswar.",
  },
  {
    title: "Lost in Harmony (2024)",
    description:
      "A critically acclaimed musical short, winning multiple awards, including Best Musical at Europe Music Awards and Best Score at American Tracks Music Awards.",
  },
  {
    title: "Magale Kanmaniye",
    description:
      "A heartfelt orchestral tribute to daughters, based on Raga Pahadi.",
  },
  {
    title: "Balahamsa in Symphony",
    description:
      "A full orchestral composition based on Raga Balahamsa.",
  },
  {
    title: "Raindrops",
    description:
      "A dynamic instrumental piece blending Ragas Bageshri and Sri Ranjani.",
  },
  {
    title: "Mystical Mind",
    description:
      "A reflective orchestral composition evoking deep introspection.",
  },
  {
    title: "Malare",
    description:
      "An original score composed for the play Bama Vijayam, premiered in April 2024.",
  },
];

const albums = [
  "Sunaadha Manjari I, II, III",
  "Kamala Charane",
  "Dancing Melodies – Thillanas",
  "Madhuradhwani",
  "Sudaadha Vinodhan (Tribute DVD)",
  "Tanjore S. Kalyanaraman – Ahe (Tribute DVD)",
];

const CompositionPage = () => {
  return (
    <div className="container mx-auto lg:p-6 md:p-6 sm:p-4 xs:p-2">
      <h1 className="bg-gradient-to-br from-brown-5 via-skyblue to-yellow-100 bg-clip-text text-4xl font-semibold text-transparent text-center mb-6">Compositions & Musical Works</h1>
      
      <section className="mb-10 flex w-full lg:flex-row  md:flex-row sm:flex-col-reverse xs:flex-col-reverse mx-auto text-center items-center lg:p-[4rem] md:p-[4rem] sm:p-[2rem] xs:p-[1rem] mt-[4rem] justify-evenly gap-10">
        <div className="space-y-6 ld:w-[88rem] md:w-[88rem] sm:w-[68rem] xs:w-[22rem]">
        <h2 className="text-2xl font-semibold mb-4 text-brown-200">Orchestral & Instrumental Compositions</h2>
          {compositions.map((comp, index) => (
            <div key={index} className="p-4 bg-brown-5 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{comp.title}</h3>
              <p className="text-richblack-900 mt-2">{comp.description}</p>
            </div>
          ))}
        </div>

        <div className="w-[80%] flex flex-col relative gap-[6rem] justify-between">
            <img  src={image1} />
            <img  src={image2} />
        </div>
      </section>

      <section className="mb-10 flex w-full lg:flex-row  md:flex-row sm:flex-col xs:flex-col mx-auto text-center items-center lg:p-[4rem] md:p-[4rem] sm:p-[2rem] xs:p-[0.8rem] mt-[4rem] justify-evenly gap-10">
      <div className="relative lg:w-[70%] md:w-[70%] sm:w-[80%] xs:w-[100%] flex flex-col">
        <img src={image3} />
      </div>
      <div className="flex flex-col text-start">
        <h2 className="text-3xl font-semibold text-brown-100 mb-4">Performance Albums & Contributions</h2>
        <ul className="list-disc list-inside space-y-2">
          {albums.map((album, index) => (
            <li key={index} className="text-richblack-100">{album}</li>
          ))}
        </ul>
        </div>
      </section>
    </div>
  );
};

export default CompositionPage;
