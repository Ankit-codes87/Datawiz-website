import React from 'react';

// This array was missing
const teamData = [
    { id: 1, name: 'Samarth', role: 'Head', imageUrl: 'src/im1.jpg' },
    { id: 2, name: 'Vishwanath', role: 'Co-Head', imageUrl: 'src/im2.jpg' },
    { id: 3, name: 'Samarth', role: 'Tech Lead', imageUrl: 'src/im3.jpg' },
    { id: 4, name: 'Hansika', role: 'Design Lead', imageUrl: 'src/im4.jpg' },
    { id: 5, name: 'Vasantkumar', role: 'Media Lead', imageUrl: 'src/im5.jpg' },
    { id: 6, name: 'Moksitha', role: 'PR Lead', imageUrl: 'src/im6.jpg' },
    { id: 7, name: 'Shashank', role: 'Event Lead', imageUrl: 'src/im7.jpg' }
];

const TeamMember = ({ member, index }) => (
    <div className="team-member" data-aos="zoom-in" data-aos-delay={index * 100}>
        <img src={member.imageUrl} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
    </div>
);

const Team = () => {
    return (
        <section id="team" className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title hero-gradient-text">Our Team</h2>
                    <p className="section-subtitle">The minds behind the magic.</p>
                </div>
                <div className="team-grid">
                    {teamData.map((member, index) => (
                        <TeamMember key={member.id} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;