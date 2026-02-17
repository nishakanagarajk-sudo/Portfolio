import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2016 - 2020',
      details: 'Focused on Software Engineering and Web Development'
    },
    {
      id: 2,
      degree: 'Certification in Full Stack Web Development',
      institution: 'Online Learning Platform',
      year: '2019',
      details: 'Comprehensive course covering MERN stack and best practices'
    },
    {
      id: 3,
      degree: 'Advanced React Development',
      institution: 'Professional Development Program',
      year: '2021',
      details: 'Advanced patterns, hooks, and performance optimization'
    }
  ]

  return (
    <div className="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="edu-header">
                <h3>{edu.degree}</h3>
                <span className="edu-year">{edu.year}</span>
              </div>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
