import { motion } from "framer-motion";
import recording1 from "../assets/Hamir/IMG_4454.JPG";
import recording2 from "../assets/Hamir/IMG_4485.JPG";
import recording3 from "../assets/Hamir/IMG_4495.JPG";

const images = [recording1, recording2, recording3];

const UpcomingProjects = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="bg-gradient-to-br from-brown-5 via-skyblue to-yellow-100 bg-clip-text lg:text-4xl md:text-4xl xs:text-3xl font-semibold text-transparent border-b-2 border-richblack-400 pb-2 mb-10 uppercase tracking-wide">
        Upcoming Projects
      </h1>

      <div className="w-full max-w-4xl space-y-8">
        {/* HAMIR KALYANI – A Symphonic Thillana */}
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-brown-200">🌿 HAMIR KALYANI – A Symphonic Thillana</h2>
          <p className="text-gray-300 mt-2">
            This unique orchestral project is an <strong>auditory and visual tribute to nature and wildlife conservation</strong>.  
            The music video will be filmed in <strong>Dandeli, Bharatpur, and Vedanthangal</strong>, featuring the enchanting sounds of <strong>India’s diverse bird species</strong>.
          </p>
          <p className="text-gray-400 italic mt-2">"A symphony of melodies, intertwined with the whispers of nature, paying homage to India’s avian biodiversity."</p>
        </div>

        {/* Animated Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img src={image} alt={`Recording ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
