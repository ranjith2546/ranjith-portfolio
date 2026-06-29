import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && (
        <div className="page-loader">
          <span>RK.dev</span>
        </div>
      )}
      <Navbar />
      <Hero />
      <div className="full-bleed"></div>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <div className="full-bleed"></div>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <div className="full-bleed"></div>
      <ScrollReveal>
        <Education />
      </ScrollReveal>
      <div className="full-bleed"></div>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <div className="full-bleed"></div>
      <ScrollReveal>
        <Achievements />
      </ScrollReveal>
      <div className="full-bleed"></div>
      <Stats />
      <div className="full-bleed"></div>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
    </>
  )
}

export default App
