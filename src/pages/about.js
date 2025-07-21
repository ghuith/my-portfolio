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
              <strong>Company Name</strong> - Frontend Developer – Freelance (2023 - Present) (Year-Present)
              <p>Developed several websites and web applications using modern technologies like React.js and Bootstrap. Experienced in building responsive, user-friendly interfaces, enhancing user experience, and integrating frontend with backend services through REST APIs. Worked with clients across different industries, always delivering high-quality projects on time.</p>
            </li>
            <li>
              <strong>Previous Company</strong> - Intern – GoMyCode (2024) (Year-Year)
              <p>Completed an intensive hands-on training program focused on full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built full applications from scratch, applied concepts such as authentication, state management, and database design.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
