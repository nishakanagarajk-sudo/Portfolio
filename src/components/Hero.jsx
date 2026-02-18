import './Hero.css'

const Hero = ({ scrollToSection }) => {
  const handleGetStarted = () => {
    if (typeof scrollToSection === 'function') {
      scrollToSection('contact')
    }
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Full Stack Developer | Tech Enthusiast</p>
        <p className="hero-description">
          Creating beautiful and functional web experiences
        </p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="hero-image">
        <div className="hero-placeholder">👨‍💻</div>
      </div>
    </div>
  )
}

export default Hero
