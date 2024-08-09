'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const Reveal = ({ children }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView])


    return (

        <div className="relative">
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div className="rounded-full"
                variants={{
                    hidden: { left: 0, opacity: 0.3 },
                    visible: { left: "100%", opacity: 1 }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ ease: "easeIn", duration: 0.5 }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: '#4c1d95',
                    zIndex: 2
                }} />
        </div>

    );
}

export default Reveal; 