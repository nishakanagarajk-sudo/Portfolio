import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>Phone: <a href="tel:9999999999">9999999999</a></p>
      <p>Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/your-profile</a>
      </p>
    </div>
  )
}

export default Contact
