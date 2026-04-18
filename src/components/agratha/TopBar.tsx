import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <div className="w-full bg-arena-deep/80 backdrop-blur-xl border-b border-white/5 py-4 relative z-[60]">
      <div className="container flex items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-start"
        >
          <img 
            src="/colleg logo-Photoroom.png" 
            alt="College Logo" 
            className="h-12 md:h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-neon blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
            <img 
              src="/swamiji-Photoroom.png" 
              alt="Swamiji" 
              className="relative h-16 md:h-24 w-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-end"
        >
          <img 
            src="/agrata logo-Photoroom.png" 
            alt="Agratha Logo" 
            className="h-12 md:h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TopBar;
