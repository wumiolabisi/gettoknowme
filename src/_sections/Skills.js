'use client';
import Reveal from '@/_components/Reveal';
import Image from 'next/image';
import code from '../../public/code.jpg';
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

    return (
        <Reveal>
            <div ref={container} className="surprise-container relative">
                <div className="sticky-container">
                    <div className="el w-full h-full absolute top-0 flex flex-row justify-center items-center">
                        <motion.div style={{ scale: scale4 }} className="img-container relative">
                            <Image src={code} className="object-cover shadow-lg img-el"
                                width={320}
                                height={500}
                                alt="Bout de code" loading="lazy" placeholder="blur" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
export default Skills;