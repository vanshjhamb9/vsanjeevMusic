import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

const categories = [
  { id: "magalae", name: "Magalae Kanmaniye", thumbnail: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738840643/IMG_1562_vyn6dy.jpg" },
  { id: "award", name: "Award Photos", thumbnail: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839499/IMG_0420_kawgth.jpg" },
  { id: "harmony", name: "Lost in Harmony", thumbnail: "/Harmony/Lost in Harmony (5).jpg" },
  { id: "hamir", name: "Hamir Kalyani", thumbnail: "/Hamir/IMG_4454.JPG" },
  { id: "performances", name: "Performances", thumbnail: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838977/IMG_0214_zfgxkg.jpg" },
  { id: "japan", name: "Japan Trip", thumbnail: "/Japan/993A0545-Enhanced-NR.jpg" },
  
];

const media = {
  magalae: [
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738840643/IMG_1562_vyn6dy.jpg" },
    // { type: "video", src: "https://res.cloudinary.com/dqdui1hq8/video/upload/v1738840560/IMG_2556_fdjztw.mov" },
    // { type: "video", src: "https://res.cloudinary.com/dqdui1hq8/video/upload/v1738840556/IMG_2550_sjjura.mov" },
    // { type: "video", src: "https://res.cloudinary.com/dqdui1hq8/video/upload/v1738840552/IMG_2551_cbusmp.mov" },
    // { type: "video", src: "https://res.cloudinary.com/dqdui1hq8/video/upload/v1738840672/IMG_1568_c21cb7.mov" },
    // { type: "video", src: "https://res.cloudinary.com/dqdui1hq8/video/upload/v1738840663/IMG_1563_oyngca.mov" },
    // { type: "video", src: "https://res.cloudinary.com/dqdui1hq8/video/upload/v1738840659/IMG_1557_so60l5.mov" },
    // { type: "video", src: "https://res.cloudinary.com/dqdui1hq8/video/upload/v1738840655/IMG_1556_sbotcc.mov" },
    { type: "video", src: "/Magale/IMG_1555.mp4" },
    { type: "video", src: "/Magale/IMG_1556.mp4" },
    { type: "video", src: "/Magale/IMG_1561.mp4" },
    { type: "video", src: "/Magale/IMG_1563.mp4" },
    { type: "video", src: "/Magale/IMG_1564.mp4" },
    { type: "video", src: "/Magale/IMG_1565.mp4" },
    { type: "video", src: "/Magale/IMG_1567.mp4" },
    { type: "video", src: "/Magale/_IMG_3014.mp4" },
    { type: "video", src: "/Magale/_IMG_3017.mp4" },
    { type: "video", src: "/Magale/C0006.MP4" },
    { type: "video", src: "/Magale/C0007.MP4" },
    



  ],
  award: [
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839500/IMG_0422_scgytj.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839499/IMG_0421_w3qp7o.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839499/IMG_0420_kawgth.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839498/IMG_0418_ozrpry.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839529/IMG_4653_cnltmt.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839528/IMG_4658_ihhb0k.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839526/IMG_4659_w5bcqs.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839525/IMG_4660_oegmeb.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839524/IMG_4666_txrtjn.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839516/IMG_4663_wgw2k4.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839513/IMG_4652_ljgre4.jpg" },
    { type: "image", src: "/awards/993A3666.jpg" },
    { type: "image", src: "/awards/993A3667.jpg" },
    { type: "image", src: "/awards/BEST MUSIC VIDEO.png" },
    { type: "image", src: "/awards/IMG_2315.PNG" },
    { type: "image", src: "/awards/score-winner-TMA's-certificate.jpg" },
    { type: "image", src: "/awards/SILENT FILM.jpg" },
    { type: "image", src: "/awards/ЗАТЕРЯННЫЙ В ГАРМОНИИ.png" },
   

  ],
  japan: [
    { type: "video", src: "/Japan/JAPAN_REEL_V2.mp4" },
    { type: "video", src: "/Japan/JAPAN_REEL.mp4" },
    { type: "video", src: "/Japan/JAPAN.mp4" },
    { type: "video", src: "/Japan/Japan1.mp4" },
  ],
  harmony: [
    { type: "image", src: "/Harmony/IMG_2343 (1).JPG" },
    { type: "image", src: "/Harmony/IMG_2343(1).jpg" },
    { type: "image", src: "/Harmony/IMG_2343.JPG" },
    { type: "image", src: "/Harmony/Lost in Harmony (1).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (5).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (6).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (11).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (16).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (19).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (20).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (21).jpg" },
    { type: "image", src: "/Harmony/Lost in Harmony (26).jpg" },
    { type: "video", src: "/videos/harmony.mp4" },
  ],
  hamir: [
    { type: "image", src: "/images/hamir1.jpg" },
    { type: "video", src: "/videos/hamir.mp4" },
  ],
  performances: [
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838978/IMG_0215_h3mdqp.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838977/IMG_0214_zfgxkg.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838975/IMG_0218_gnkifb.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838975/IMG_0212_liqmxh.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838975/IMG_0216_m7mpx6.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838974/IMG_0217_ylltqc.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838973/IMG_0211_mn4nxj.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738838973/IMG_0213_la5mgn.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839005/IMG_0172_vovonp.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839004/IMG_0179_kktlwe.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839003/IMG_0178_zhcjtw.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839003/IMG_0174_rasc7s.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839001/IMG_0165_qchmr1.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839023/IMG_8892_q4jsoi.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839021/IMG_5105_sygmfw.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839021/IMG_8893_d1hebh.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839048/With_Ashok_Ramani_-Performance_in_the_USA_nz3r7b.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839047/Sacramento_Aradhan_-_USA_ln8uh6.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dqdui1hq8/image/upload/v1738839047/For_Gayathri_Venkataraghavan_in_USA_ynep9a.jpg" },
    { type: "video", src: "/videos/performance.mp4" },
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("magalae");
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);

  const handleMediaLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-black text-white">
    {/* Categories Sidebar */}
    <div className="w-1/4 p-4 space-y-4 overflow-y-auto scrollbar-hidden">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`cursor-pointer p-2 rounded-lg transition-all ${
            selectedCategory === category.id ? "bg-gray-800" : "bg-gray-600"
          }`}
          onClick={() => {
            setLoading(true);
            setSelectedCategory(category.id);
          }}
        >
          <img
            src={category.thumbnail}
            alt={category.name}
            className="w-full h-auto object-cover rounded-lg"
          />
          <p className="text-center mt-2">{category.name}</p>
        </div>
      ))}
    </div>

    {/* Media Display */}
    <div className="w-3/4 p-4 flex flex-wrap justify-center items-center gap-4 relative overflow-y-auto  scrollbar-hidden">
      {loading && <Loader />} {/* Display loader while media is loading */}
      {media[selectedCategory].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={`Media ${index}`}
              onLoad={handleMediaLoad}
              className="rounded-lg object-cover"
              style={{ width: index % 2 === 0 ? "400px" : "300px", height: "auto" }}
            />
          ) : (
            <div className="relative">
                <video
                  src={item.src}
                  autoPlay
                  muted={muted}
                  onLoadedData={handleMediaLoad}
                  className="rounded-lg object-cover"
                  style={{ width: index % 2 === 0 ? "500px" : "350px", height: "auto" }}
                />
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full"
                  onClick={() => setMuted(!muted)}
                >
                  {muted ? "🔇" : "🔊"}
                </button>
              </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default Gallery;
