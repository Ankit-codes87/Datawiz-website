import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container about-content">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title hero-gradient-text">About DATAWIZ</h2>
                    <p className="section-subtitle">
                        Our Mission, Vision, and What We Do
                    </p>
                </div>
                <div className="about-grid">
                    <Parallax speed={10} className="about-text" data-aos="fade-right">
                        <div>
                          <h3 className="about-heading">Our Mission</h3>
                          <p>To foster a vibrant community of data enthusiasts, empowering students with the skills and experience needed to excel in data science, analytics, and machine learning.</p>
                          <h3 className="about-heading vision">Our Vision</h3>
                          <p>To be the cornerstone of data innovation on campus, bridging the gap between theory and real-world application.</p>
                        </div>
                    </Parallax>
                    <Parallax speed={-10} className="about-image" data-aos="zoom-in-left">
                        <img src="src/logo2.jpg" alt="Club collaboration" className="image-hover-effect" />
                    </Parallax>
                </div>
            </div>
        </section>
    );
};

export default About;