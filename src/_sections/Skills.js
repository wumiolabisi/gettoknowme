'use client';
import Image from 'next/image';
import Pic1 from '../../public/code.jpg';
import Pic2 from '../../public/pizza.jpg';
import Pic3 from '../../public/3d.jpg';
import Pic4 from '../../public/rando.jpg';
import Pic5 from '../../public/montage.jpg';
import Pic6 from '../../public/music.jpg';
import Pic7 from '../../public/flaca.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: Pic1,
            scale: scale4
        },
        {
            src: Pic2,
            scale: scale5
        },
        {
            src: Pic3,
            scale: scale6
        },
        {
            src: Pic4,
            scale: scale4
        },
        {
            src: Pic5,
            scale: scale5
        },
        {
            src: Pic6,
            scale: scale8
        },
        {
            src: Pic7,
            scale: scale9
        }
    ]
    return (
        <div ref={container} className="surprise-container">
            <div className="sticky-container md:z-20 z-0 overflow-y-clip">
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div style={{ scale }} key={index} className="el flex flex-row justify-center items-center">
                            <div className="img-container relative">
                                <Image src={src} className="object-cover rounded-lg shadow-lg img-el"
                                    width={320}
                                    height={500}
                                    alt="Gallerie surprise" loading="lazy" placeholder="blur" />
                            </div>
                        </motion.div>
                    })
                }

            </div>
        </div>
    )
}
export default Skills;