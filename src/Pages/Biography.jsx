import styled from "styled-components";
import Image1 from "../assets/IMG_4772.JPG";
import Image2 from "../assets/993A0545-Enhanced-NR.jpg";
import Image3 from "../assets/993A0540.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Biography = () => {
  return (
    <>
      <section className="w-11/12 mb-[10rem] mx-auto border-b md:p-[5rem] border-richblack-700">
        <div className="text-center mb-10">
          <h1 className="bg-gradient-to-br from-brown-5 via-skyblue to-yellow-100 bg-clip-text text-5xl font-bold text-transparent">
            Biography
          </h1>
        </div>

        {/* The Performer Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-32">
          <div className="lg:w-[50%] text-left">
            <h2 className="text-3xl font-semibold text-brown-50">The Performer</h2>
            <p className="mt-4 text-lg text-richblack-25 leading-relaxed">
              Sanjeev Venkataramanan, a distinguished disciple of the eminent violin maestro
              Sangita Kalanidhi Kum. A. Kanyakumari, has been captivating audiences with his
              exceptional artistry since 1994. His debut performance marked the beginning of an
              illustrious journey in Carnatic music, showcasing profound technical mastery and
              emotive depth.
            </p>
            <p className="mt-4 text-lg text-richblack-25 leading-relaxed">
              He is an ‘A’ grade artiste of All India Radio and Doordarshan, regularly performing
              at the prestigious December Music Festival in Chennai and all major music Sabhas.
              His performances are celebrated for their clarity, precision, and deep emotional
              connect, making him a sought-after violinist in both solo and collaborative settings.
            </p>
          </div>
          <img
            src={Image1}
            alt="The Performer"
            className="shadow-lg rounded-lg lg:w-[50%] transition duration-500 hover:scale-105"
          />
        </div>

        {/* The Composer Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mt-32">
          <div className="lg:w-[50%] text-left">
            <h2 className="text-3xl font-semibold text-brown-50">The Composer</h2>
            <p className="mt-4 text-lg text-richblack-25 leading-relaxed">
              In 2015, Sanjeev expanded his musical horizons by delving into Western classical
              orchestration. Seeking to push the boundaries of Carnatic music, he envisioned a
              grander presentation of ragas through full orchestration, blending traditional
              Indian melodies with rich symphonic textures.
            </p>
            <p className="mt-4 text-lg text-richblack-25 leading-relaxed">
              His pioneering work has led to several critically acclaimed compositions, including
              "Mix and Match" (2024), "Lost in Harmony" (2024), and "Balahamsa in Symphony." His
              mission is to establish an instrumental repertoire for Carnatic music, introducing
              new audiences to its timeless beauty.
            </p>
          </div>
          <img
            src={Image2}
            alt="The Composer"
            className="shadow-lg rounded-lg lg:w-[50%] transition duration-500 hover:scale-105"
          />
        </div>

        {/* Selected Compositions */}
        <div className="mt-32 text-left">
          <h2 className="text-3xl font-semibold text-brown-50 text-center mb-6">
            Selected Compositions & Musical Works
          </h2>
          <ul className="list-disc pl-10 text-lg text-brown-5 space-y-4">
            <li>
              <strong>Mix and Match (2024)</strong> – A dance suite inspired by India's rich
              saree-weaving traditions, premiered by Sangeet Natak Akademi Awardee Mrs. Jayalakshmi
              Eswar.
            </li>
            <li>
              <strong>Lost in Harmony (2024)</strong> – A musical short film that won multiple
              international awards, including Best Musical at the Europe Music Awards.
            </li>
            <li>
              <strong>Magale Kanmaniye</strong> – An orchestral tribute to daughters, based on Raga
              Pahadi.
            </li>
            <li>
              <strong>Balahamsa in Symphony</strong> – A full orchestral composition based on Raga
              Balahamsa.
            </li>
            <li>
              <strong>Raindrops</strong> – A dynamic instrumental piece blending Ragas Bageshri and
              Sri Ranjani.
            </li>
            <li>
              <strong>Mystical Mind</strong> – A reflective orchestral composition evoking deep
              introspection.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Biography;
