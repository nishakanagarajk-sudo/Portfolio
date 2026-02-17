import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: '#',
      image: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      image: '✅'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with real-time data and forecasts',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      link: '#',
      image: '🌤️'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics and insights',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      link: '#',
      image: '📊'
    }
  ]

  return (
    <div className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
