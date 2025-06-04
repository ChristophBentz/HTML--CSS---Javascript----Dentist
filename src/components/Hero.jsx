import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" 
         style={{ backgroundImage: "url('/img/Header-Bild.jpg')" }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-4/5 md:w-3/4 lg:w-2/3 bg-[#9182c4]/70 backdrop-blur-sm rounded-lg text-center p-8 md:p-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wider mb-6">
          Unser Service
        </h1>
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
          Willkommen bei Dr.Wirzockenab Zahnmedizin: Bei Dr.Wirzockenab legen wir großen Wert auf die Gesundheit und das Wohlbefinden unserer Patienten. Unser erfahrenes Team von Zahnärzten und Fachkräften steht Ihnen zur Verfügung, um Ihnen die bestmögliche zahnärztliche Versorgung zu bieten.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#d8aed3] text-[#ebd9dd] text-xl md:text-2xl px-8 py-3 rounded-md hover:bg-[#d8aed3]/90 transition-colors"
          href="#"
        >
          Klicke Mich!
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;