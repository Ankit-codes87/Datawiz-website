import React from 'react';

const eventsData = [
    { id: 1, title: 'Odoo x NMIT Hackathon 2025', date: '2025-09-21T09:00:00Z', description: 'Our flagship hackathon in collaboration with Odoo, bringing together the brightest minds to solve real-world business challenges.', imageUrl: 'src/im10.jpg' },
    { id: 2, title: 'Recruitments 2.0', date: '2025-10-20T10:00:00Z', description: 'Join the next generation of data wizards. We are looking for passionate and talented students to be a part of our growing community.', imageUrl: 'src/rec.jpg' },
    { id: 3, title: 'Inaugration Ceremony', date: '2025-09-01T11:00:00Z', description: 'The official launch of the DATAWIZ club for the new academic year. Join us to kickstart a year of innovation and learning.', imageUrl: 'src/ing.jpg' }
];

const EventCard = ({ event }) => (
    <div className="event-card" data-aos="zoom-in-up">
        <img src={event.imageUrl} alt={event.title} />
        <div className="event-card-content">
            <h3>{event.title}</h3>
            <p className="date">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>{event.description}</p>
        </div>
    </div>
);

const Events = () => {
    // This line was missing. It sorts the events by date before rendering them.
    const sortedEvents = eventsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section id="events" className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title hero-gradient-text">Our Events</h2>
                    <p className="section-subtitle">
                        Check out what we've been up to.
                    </p>
                </div>
                <div className="events-grid">
                    {sortedEvents.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </div>
        </section>
    );
};

export default Events;