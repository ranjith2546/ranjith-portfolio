function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      text: '2023 Individual Achievement Award at T-Systems for outstanding performance and impactful contributions',
      badge: 'T-Systems',
    },
    {
      icon: '🥇',
      text: 'Team Player Award 2020 at Ubix Systems for significant contributions to organizational growth',
      badge: 'Ubix Systems',
    },
    {
      icon: '📜',
      text: 'Certified: Node.js - The Complete Guide, Java Programming Masterclass, Docker & Kubernetes',
      badge: 'Udemy',
    },
    {
      icon: '☁️',
      text: 'AWS Cloud Practitioner Essentials Certification',
      badge: 'Coursera',
    },
    {
      icon: '💼',
      text: 'Completed 6-month Internship at Pixzee Technology — kickstarting a career in full stack development',
      badge: 'Internship',
    },
  ]

  return (
    <section id="achievements">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">Achievements</h2>
      </div>
      <div className="achievements-list">
        {achievements.map((item, idx) => (
          <div className="achievement-item" key={idx}>
            <div className="achievement-icon">{item.icon}</div>
            <div className="achievement-text">{item.text}</div>
            <div className="achievement-badge">{item.badge}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
