import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
    children,
    threshold = 0.1,
    delay = 0,
    duration = 1000,
    className = ""
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before the element is fully in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const transitionDelay = `${delay}ms`;
    const transitionDuration = `${duration}ms`;

    return (
        <div
            ref={ref}
            className={`transition-all ease-out transform ${className} ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
            style={{
                transitionDuration: transitionDuration,
                transitionDelay: transitionDelay
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
