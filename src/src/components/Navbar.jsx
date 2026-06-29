import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120

      const sections = links
        .map((link) => {
          const id = link.href.replace('#', '')
          const el = document.getElementById(id)
          if (!el) return null
          return { id, offsetTop: el.offsetTop }
        })
        .filter(Boolean)

      let current = ''
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offsetTop) {
          current = sections[i].id
          break
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">RK.dev</a>
        <div className="nav-right">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/Ranjith_Kumar_G_Resume22-06-2026.pdf" download>
                Resume ↓
              </a>
            </li>
          </ul>
          <ThemeToggle />
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="/Ranjith_Kumar_G_Resume22-06-2026.pdf" download onClick={closeMenu}>
          Download Resume
        </a>
      </div>
    </>
  )
}

export default Navbar
