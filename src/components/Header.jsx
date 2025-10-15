import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#events', label: 'Events' },
        { href: '#team', label: 'Team' },
        { href: '#achievements', label: 'Achievements' },
        { href: '#contact', label: 'Contact Us' },
    ];

    const handleNavClick = () => {
        if (window.innerWidth < 768) {
            setIsMenuOpen(false);
        }
    };
    
    return (
        <header id="header">
            <div className="container header-content">
                <a href="#home" className="logo-container" onClick={handleNavClick}>
                    <img src="src/logo.jpg" alt="DATAWIZ Logo" className="datawiz-logo" />
                    <img src="src/logo3.jpg" alt="Nitte University Logo" className="nitte-logo" />
                </a>

                <nav className="desktop-nav">
                    {navLinks.map(link => (
                         <a 
                            key={link.href}
                            href={link.href} 
                            className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                         >
                            {link.label}
                         </a>
                    ))}
                </nav>

                <a href="https://forms.gle/your-join-form-link" target="_blank" rel="noopener noreferrer" className="join-us-btn">
                    Join Us
                </a>
                
                <button id="mobile-nav-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            
            <div id="mobile-nav-menu" className={!isMenuOpen ? 'hidden' : ''}>
                <div className="nav-items">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="nav-link" onClick={handleNavClick}>{link.label}</a>
                    ))}
                    <a href="https://forms.gle/your-join-form-link" target="_blank" rel="noopener noreferrer" className="join-us-btn">
                        Join Us
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;