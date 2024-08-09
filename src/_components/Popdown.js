'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const Popdown = ({ children, delay }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])


    return (

        <div className="relative">
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ ease: "easeOut", duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>

        </div>

    );
}

export default Popdown; 