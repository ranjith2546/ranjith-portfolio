import { useEffect, useRef } from 'react'

function ScrollReveal({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const el = ref.current
    if (el) {
      const revealElements = el.querySelectorAll('.section-header, .exp-item, .skill-group, .project-card, .achievement-item, .contact-section')
      revealElements.forEach((element, i) => {
        element.classList.add('reveal')
        element.style.transitionDelay = `${(i % 4) * 0.08}s`
        observer.observe(element)
      })
    }

    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
}

export default ScrollReveal
