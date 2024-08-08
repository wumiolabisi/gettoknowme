'use client';
import Image from "next/image";
import { AnimatePresence, motion, useScroll } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      {/* START SECTION RESUME */}
      <div className="text-center">
        <div className="flex flex-col-reverse items-center">
          <div className="flex flex-col-reverse items-center">
            <h1 className="text-3xl text-violet-900">Développeuse Web Fullstack située à Paris et sa région</h1>
            <p className="uppercase md:text-6xl text-3xl font-bold mb-2 text-violet-900">Omowumi OLABISI</p>
          </div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Image src="/Omowumi_OLABISI_photo.jpeg" className="object-cover rounded-full shadow-lg"
              width={320}
              height={500}
              alt="Photo de Omowumi OLABISI, développeuse Web située à Paris" loading="lazy" />
          </motion.div>

        </div>
        <div>
          <p className="text-2xl text-violet-900/75">NextJS, React, WordPress, PHP, UI/UX et Accessiblité, ThreeJS, Framer Motion</p>
        </div>
      </div>
      {/* END SECTION RESUME */}
      {/* START SECTION ABOUT */}
      {/* END SECTION ABOUT */}
      {/* START SECTION SKILLS */}
      {/* END SECTION SKILLS */}
      {/* START SECTION EXPERIENCES/PROJECTS */}
      {/* END SECTION EXPERIENCES/PROJECTS */}
      {/* START SECTION CONTACT */}
      {/* END SECTION CONTACT */}
    </AnimatePresence>
  );
}
