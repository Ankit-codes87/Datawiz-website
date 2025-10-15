import React from 'react';

const Contact = () => {
    // This function was likely missing
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Form Submitted:', {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        });
        alert('Thank you for your message!');
        e.target.reset();
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center' }} data-aos="fade-up">
                    <h2 className="section-title hero-gradient-text">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a question or a collaboration in mind?
                    </p>
                </div>
                <div className="contact-grid">
                    <div className="contact-form" data-aos="fade-right">
                        <h3>Send us a message</h3>
                        {/* Make sure onSubmit is attached to the form */}
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" className="form-textarea" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>
                    <div className="contact-info" data-aos="fade-left">
                        <h3>Contact Information</h3>
                        <div className="contact-info-items">
                            <div className="contact-item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:contact@datawiznmit.com">contact@datawiznmit.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div>
                                    <h4>Address</h4>
                                    <p>Nitte Meenakshi Institute of Technology, Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;