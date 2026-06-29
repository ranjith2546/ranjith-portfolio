import { useState, useEffect } from 'react'

function useTypingEffect(texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}

function CodeBlock() {
  return (
    <div className="hero-code-block">
      <div className="code-header">
        <span className="code-dot red"></span>
        <span className="code-dot yellow"></span>
        <span className="code-dot green"></span>
        <span className="code-filename">developer.js</span>
      </div>
      <pre className="code-content">
        <span className="code-keyword">const</span>{' '}
        <span className="code-property">developer</span>{' = '}
        <span className="code-bracket">{'{'}</span>{'\n'}
        {'  '}<span className="code-property">name</span>:{' '}
        <span className="code-string">"Ranjith Kumar G"</span>,{'\n'}
        {'  '}<span className="code-property">role</span>:{' '}
        <span className="code-string">"Sr. Full Stack Developer"</span>,{'\n'}
        {'  '}<span className="code-property">experience</span>:{' '}
        <span className="code-string">"8+ years"</span>,{'\n'}
        {'  '}<span className="code-property">skills</span>:{' '}
        <span className="code-bracket">[</span>{'\n'}
        {'    '}<span className="code-string">"JavaScript"</span>,{' '}
        <span className="code-string">"Node.js"</span>,{'\n'}
        {'    '}<span className="code-string">"Java"</span>,{' '}
        <span className="code-string">"Spring Boot"</span>,{'\n'}
        {'    '}<span className="code-string">"React"</span>,{' '}
        <span className="code-string">"Vue"</span>,{' '}
        <span className="code-string">"AWS"</span>{'\n'}
        {'  '}<span className="code-bracket">]</span>,{'\n'}
        {'  '}<span className="code-property">passion</span>:{' '}
        <span className="code-string">"Building at Scale"</span>,{'\n'}
        {'  '}<span className="code-property">available</span>:{' '}
        <span className="code-value">true</span>{'\n'}
        <span className="code-bracket">{'}'}</span>;{'\n\n'}
        <span className="code-export">export default</span> developer;
      </pre>
    </div>
  )
}

function Hero() {
  const roles = [
    'Sr. Full Stack Developer',
    'Java & Spring Boot Developer',
    'Microservices Architect',
    'Cloud & DevOps Engineer', 
  ];

  const typedText = useTypingEffect(roles, 80, 40, 1500)

  return (
    <section className="hero" style={{ padding: 0, maxWidth: '100%' }}>
      <div className="hero-left">
        <p className="hero-tag">// Sr. Software Engineer · Bengaluru, India</p>
        <h1 className="hero-name"><span>Ranjith</span>Kumar G</h1>
        <div className="hero-typing">
          <span className="typing-prefix">&gt;</span>
          <span className="typing-text">{typedText}</span>
          <span className="typing-cursor">|</span>
        </div>
        <p className="hero-desc">
          Results-driven Full Stack Developer with 8+ years of experience in designing,
          developing, and deploying highly scalable, modern web applications. Expertise in
          JavaScript, Node.js, Java, Spring Boot and AWS.
        </p>
        <div className="hero-cta">
          <a href="mailto:ranjith2546@gmail.com" className="btn btn-primary">Get in touch</a>
          <a href="https://linkedin.com/in/ranjithkumarg2546" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
          <a href="/Ranjith_Kumar_G_Resume22-06-2026.pdf" download className="btn btn-outline">Download Resume ↓</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-grid"></div>
        <div className="hero-orb">
          <div className="hero-profile-wrapper">
            <img
              src="/Ranjith_profile.jpg"
              alt="Ranjith Kumar G"
              className="hero-profile"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
