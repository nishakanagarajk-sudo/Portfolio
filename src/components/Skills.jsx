import './Skills.css'

const Skills = () => {
  const skills = {
    frontend: ['React', 'JavaScript', 'HTML/CSS', 'Vite', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma']
  }

  return (
    <div className="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-list">
              {skills.frontend.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-list">
              {skills.backend.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skill-list">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
