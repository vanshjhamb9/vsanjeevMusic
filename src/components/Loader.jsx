import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
};

export default Loader;
