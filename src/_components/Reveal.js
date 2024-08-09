'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const Reveal = ({ children }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])


    return (

        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: -5 },
                visible: { opacity: 1, y: 0 }
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={mainControls}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            {children}
        </motion.div>

    );
}

export default Reveal; 