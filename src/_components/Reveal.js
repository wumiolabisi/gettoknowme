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
    }, [isInView, mainControls, slideControls])


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
            <motion.div className="rounded-lg"
                variants={{
                    hidden: { left: 0, opacity: 0.6 },
                    visible: { left: "100%", opacity: 0 }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ ease: "easeIn", duration: 0.3 }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: '#feffe6',
                    zIndex: 2
                }} />
        </div>

    );
}

export default Reveal; 