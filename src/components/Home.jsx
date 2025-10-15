import React, { useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
    const sectionRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const heroSection = sectionRef.current;
        const heroLogo = logoRef.current;
        if (!heroSection || !heroLogo) return;

        const handleMouseMove = (e) => {
            if (window.innerWidth < 768) return;
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = heroSection;
            const xRotation = 10 * ((clientY - offsetHeight / 2) / offsetHeight);
            const yRotation = -10 * ((clientX - offsetWidth / 2) / offsetWidth);
            heroLogo.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1)`;
        };

        const handleMouseLeave = () => {
            heroLogo.style.transform = `rotateX(0) rotateY(0) scale(1)`;
        };

        heroSection.addEventListener('mousemove', handleMouseMove);
        heroSection.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            heroSection.removeEventListener('mousemove', handleMouseMove);
            heroSection.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section id="home" className="section" ref={sectionRef}>
            <div className="container home-grid">
                <div className="home-text-content">
                    <h1 className="home-title" data-aos="fade-up">
                        <TypeAnimation
                          sequence={[
                            'WE ARE', 2000,
                            'WE ARE DATAWIZ', 3000,
                          ]}
                          wrapper="span"
                          speed={10}
                          cursor={true}
                          repeat={Infinity}
                          className="hero-gradient-text"
                        />
                    </h1>
                    <Parallax speed={-10}>
                      <p className="home-subtitle" data-aos="fade-up" data-aos-delay="200">
                          At Datawiz, we empower students through data science, data analytics and AI. Join us to explore, innovate and build impactful projects that shape the future.
                      </p>
                    </Parallax>
                    <div className="home-cta" data-aos="fade-up" data-aos-delay="400">
                        <a href="#about" className="get-started-btn">Get Started</a>
                    </div>
                </div>
                <div id="hero-logo-container" className="hero-logo-wrapper">
                    <img src="src/logo.jpg" alt="DATAWIZ 3D Logo" id="hero-logo" ref={logoRef} />
                </div>
            </div>
        </section>
    );
};

export default Home;