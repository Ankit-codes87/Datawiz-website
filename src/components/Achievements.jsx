import React, { useState, useEffect, useRef, useCallback } from 'react';
// We no longer import useAnimateOnScroll

const achievementImages = ['src/im8.jpg', 'src/im9.jpg', 'src/im10.jpg', 'src/im11.jpg'];

const Achievements = () => {
    // We no longer need the sectionRef or useAnimateOnScroll call
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const intervalRef = useRef(null);

    const updateSlider = useCallback(() => {
        if (!trackRef.current || !containerRef.current) return;
        const slides = trackRef.current.children;
        if (slides.length === 0) return;

        const slideWidth = slides[0].offsetWidth;
        const offset = (containerRef.current.offsetWidth / 2) - (slideWidth / 2) - (currentIndex * slideWidth);

        trackRef.current.style.transform = `translateX(${offset}px)`;
        trackRef.current.style.transition = 'transform 0.5s ease-in-out';

        Array.from(slides).forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (index === currentIndex) {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                img.style.borderColor = '#38bdf8';
            } else {
                img.style.opacity = '0.4';
                img.style.transform = 'scale(0.85)';
                img.style.borderColor = 'rgb(55 65 81)';
            }
        });
    }, [currentIndex]);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % achievementImages.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + achievementImages.length) % achievementImages.length);
    };

    const startAutoSlide = useCallback(() => {
        stopAutoSlide();
        intervalRef.current = setInterval(nextSlide, 3000);
    }, [nextSlide]);

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        updateSlider();
        startAutoSlide();
        window.addEventListener('resize', updateSlider);
        return () => {
            stopAutoSlide();
            window.removeEventListener('resize', updateSlider);
        };
    }, [updateSlider, startAutoSlide]);

    return (
        <section id="achievements" className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title hero-gradient-text">Achievements</h2>
                    <p className="section-subtitle">A Glimpse of Our Success</p>
                </div>
                <div 
                    id="slider-container" 
                    ref={containerRef} 
                    onMouseEnter={stopAutoSlide} 
                    onMouseLeave={startAutoSlide}
                    data-aos="zoom-in"
                >
                    <div className="slider-track-container">
                        <div id="achievements-track" ref={trackRef}>
                            {achievementImages.map((src, index) => (
                                <div key={index} className="achievement-slide">
                                    <img src={src} alt={`Achievement ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button id="prev-achievement" className="slider-btn" onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button id="next-achievement" className="slider-btn" onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Achievements;