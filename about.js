import React, { useRef, useEffect } from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about-section" ref={aboutRef}>
            {/* First Row: About Us */}
            <div className="about-content-wrapper">
                <div className="about-text">
                    <span className="about-us-label">About Us</span>
                    <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
                    <h2 className="about-title">Who are we?</h2>
                    <p className="about-desc">
                        AMES is a dynamic platform by and for Mechanical Engineering students at NITK. We empower each other with hands-on learning, industry insights, and lifelong connections.
                    </p>
                    <button className="about-btn">Know More</button>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="Graduation" />
                </div>
            </div>
            {/* Second Row: Objectives */}
            <div className="about-content-wrapper" style={{ marginTop: "2.5rem" }}>
                <div className="about-image2">
                    <img src={objectivesImage} alt="Classroom" />
                </div>
                <div className="about-text2">
                    <span className="about-us-label">Objectives</span>
                    <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
                    <h2 className="about-title" >Objectives That Drives Us</h2>
                    <ul className="about-desc" style={{ marginBottom: "1.5rem" }}>
                        <li>Cultivate a culture of engineering excellence through shared knowledge and collaborative initiatives.</li>
                        <li>Bridge the academia-industry gap via projects & mentorship.</li>
                        <li>Promote interdisciplinary research & social innovation</li>
                    </ul>
                    <button className="about-btn">Explore</button>
                </div>
            </div>
        </div>
            );

}
