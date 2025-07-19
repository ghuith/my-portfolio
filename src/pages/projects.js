import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './projects.css'; // Import your CSS file for styling
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project travel agency website',
      description: ' Web application for a travel agency built with React and Node.js, allowing users to browse destinations and submit booking inquiries.',
      image: 'https://marketplace.canva.com/EAGUQnq9oJg/2/0/1600w/canva-blue-orange-and-white-simple-modern-minimalist-circle-travel-agency-presentation-mQj-eG_3e38.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/ghuith/travel-agency-',
      liveLink: 'https://project-one.example.com',
    },
    {
      id: 2,
      title: 'Project amazon clone',
      description: 'A responsive e-commerce website (Amazon clone) built with React and Node.js, featuring product browsing, search, cart, and user authentication.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBolrEoo6QKuLUbxjD3uvkubreaSEGYa1mGKIDBMz9prqHi7Ub-2KvLoxpkcnnbKrM6PQ&usqp=CAU',
      technologies: ['react'  , 'bootstrap', 'css'],
      githubLink: 'https://github.com/ghuith/amazon-clone',
      liveLink: 'https://project-two.example.com',
    },
    {
      id: 3,
      title: 'Project chatbot application',
      description: 'A chatbot application built with React and Node.js that enables real-time user interaction with an intelligent virtual assistant.',
      image: 'https://corp.greenbureau.com/wp-content/uploads/2025/03/chatbot-ia.png',
      technologies: ['React', 'Node.js', 'Express', 'API'],
      githubLink: 'https://github.com/ghuith/chatbot-react-js',
      liveLink: 'https://project-three.example.com',
    },
  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={16} />
                  Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;