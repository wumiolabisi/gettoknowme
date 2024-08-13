'use client';
import Image from 'next/image';
import Pic1 from '../../public/code.jpg';
import Pic2 from '../../public/pizza.jpg';
import Pic3 from '../../public/3d.jpg';
import Pic4 from '../../public/rando.jpg';
import Pic5 from '../../public/montage.jpg';
import Pic6 from '../../public/music.jpg';
import Pic7 from '../../public/flaca.jpg';
import nuage from '../../public/nuage.png'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 4])
    const nuageGauche = useTransform(scrollYProgress, [0, 1], [1, 6])
    const nuageDroit = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: Pic3,
            scale: scaleImg
        },
        {
            src: nuage,
            scale: nuageGauche
        },
        {
            src: nuage,
            scale: nuageDroit
        }
    ]
    return (
        <div ref={container} className="surprise-container">
            <div className="sticky-container md:z-20 z-0 overflow-hidden">
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div style={{ scale }} key={index} className="el flex flex-row justify-center items-center">
                            <div className="img-container relative">
                                <Image src={src} className="img-el"
                                    fill
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