function Contact() {
  return (
    <section id="contact">
      <div className="contact-section">
        <div className="contact-inner">
          <div>
            <h2 className="contact-heading">Let's<br /><span>Connect.</span></h2>
            <p className="contact-sub">
              Open to interesting engineering challenges, collaborations, and conversations
              about scalable systems, microservices, and cloud-native architecture.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:ranjith2546@gmail.com" className="contact-link-item">
              <div>
                <span className="contact-link-label">Email</span>
                <span className="contact-link-val">ranjith2546@gmail.com</span>
              </div>
              <div className="contact-link-icon">→</div>
            </a>
            <a href="https://linkedin.com/in/ranjithkumarg2546" target="_blank" rel="noreferrer" className="contact-link-item">
              <div>
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-val">linkedin.com/in/ranjithkumarg2546</span>
              </div>
              <div className="contact-link-icon">→</div>
            </a>
            <a href="tel:+919902259594" className="contact-link-item">
              <div>
                <span className="contact-link-label">Mobile</span>
                <span className="contact-link-val">+91 99022 59594</span>
              </div>
              <div className="contact-link-icon">→</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
