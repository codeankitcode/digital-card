import React from "react";
import MailIcon from '../images/Mail.png'
import LinkedInIcon from '../images/linkedin.png'

export default function MainComponent(){
    return (
        <main className="main-content">
            <section className="intro-section">
                <h1>Ankit Kumar Roy</h1>
                <h4>Frontend Developer</h4>
                <p>ankit.website</p>
            </section>
            <section className="link-section">
                <a href="#" className="link email" ><img src={MailIcon}></img>Email</a>
                <a href="#" className="link linkedin"><img src={LinkedInIcon}></img>LinkedIn</a>
            </section>
            <section className="about-section">
                <h2>About</h2>
                <p>I am a frontend developer with a particular 
                    interest in making things simple and automating 
                    daily tasks. I try to keep up with security and
                     best practices, and am always looking for new things to learn.</p>
            </section>
            <section className="interest-section">
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet 
                    fanatic. Bacon buff. Entrepreneur. Travel geek.
                     Pop culture ninja. Coffee fanatic.</p>
            </section>
        </main>
    )
}