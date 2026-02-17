import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Developer',
      company: 'Tech Company A',
      period: '2022 - Present',
      description: 'Led development of multiple full-stack applications using React and Node.js'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Tech Company B',
      period: '2021 - 2022',
      description: 'Developed and maintained web applications, focused on frontend and backend integration'
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Tech Company C',
      period: '2020 - 2021',
      description: 'Started my career working on frontend development with React and JavaScript'
    }
  ]

  return (
    <div className="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
