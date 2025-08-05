import { useState } from 'react';
import pikmiImg from './assets/PikmiAI.jpg'
import icloudIMG from './assets/Icloud.jpg'

const Projects = () => {
    const dummyProjects = [
    {
      title: 'Doctor en tus Manos',
      details: 'Custom solution that provides health coverage to individuals in the Domincan Republic, repo included however is private for now.',
      image: '',
      tech: 'Python, React, SupaBase, PostgreSQL, ReactJS/NextJS, Fast-API',
      git: 'https://github.com/Adarby302/Project2025',
    },
    {
      title: 'PikmiAI',
      details: 'Custom GPT model chatbot thats supposed to replicate that of an assistant',
      image: pikmiImg,
      tech: 'Python, Voice-Vox Engine, OpenAI(GPT3 Early Davinci Model)',
      git: 'https://github.com/Adarby302/PikimiAI',
    },
    {
      title: 'Icloud',
      details: 'File-Sharing/hosting Enviornment over my home network, building to have a custom interface',
      image: icloudIMG,
      tech: 'Web-Dav, Fast-API, ReactJS/NextJS',
      git: 'Uploading Project',
    },

  ];
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  }

  const closeModal = () => {
    setSelectedProject(null);
  }

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {dummyProjects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => openModal(project)}
            style={{ cursor: 'pointer' }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image}/>
            <p>{selectedProject.details}</p>
            <p>{selectedProject.tech}</p>
            {selectedProject.git && (
              <a href={selectedProject.git} target="_blank" rel="noopener noreferrer">
                Click for repo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default Projects;


