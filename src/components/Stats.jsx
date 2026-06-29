import { useState, useEffect, useRef } from 'react'

function AnimatedNumber({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

function Stats() {
  const stats = [
    { number: 8, suffix: '+', label: 'Years Experience' },
    { number: 3, suffix: '', label: 'Companies' },
    { number: 6, suffix: '+', label: 'Countries Deployed' },
    { number: 2, suffix: '', label: 'Awards Won' },
    { number: 5, suffix: '+', label: 'Certifications' },
  ]

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <div className="stat-number">
              <AnimatedNumber target={stat.number} />
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
