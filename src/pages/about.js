import React from 'react';
import './about.css'; // Import your CSS file for styling

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-image">
          <img src="ghaith.jpeg" alt="GHAITH" />
        </div>
        <div className="about-content">
          <h2>Who am I?</h2>
          <p>
           
I'm Ghaith Bouallegui, a passionate frontend developer specializing in building modern and responsive web applications. With several years of experience, I focus on crafting clean, user-friendly interfaces that deliver seamless and engaging user experiences.

My journey in web development started when I discovered the power of coding to transform ideas into interactive digital solutions. Since then, I have contributed to various projects—from simple business websites to complex, feature-rich applications—continuously improving my skills and staying up-to-date with the latest technologies.


          </p>
          <p>
            My journey in web development began when I [your story here]. Since then, 
            I've worked on numerous projects ranging from small business websites to complex web applications.
          </p>
          <h2>Education</h2>
          <ul>
            <li>institut supérieur des etudes technologiques de kasserine - University Name (Year-Year)</li>
            <li>go my code /full stack developer web (https://www.gomycode.tn/) (Year)</li>
          </ul>
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Company Name</strong> - Frontend Developer (Year-Present)
              <p>Brief description of your role and achievements</p>
            </li>
            <li>
              <strong>Previous Company</strong> - Position (Year-Year)
              <p>Brief description of your role and achievements</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
