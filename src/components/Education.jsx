function Education() {
  const educations = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'East West Institute of Technology',
      year: '2015 — 2017',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sri Jagadguru Renukacharya College',
      year: '2012 — 2015',
    },
    {
      degree: 'Pre-University College (PUC)',
      institution: 'St. Paul\'s Composite Pre-University College',
      year: '2011 — 2012',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'sri manjunatha vidya samsthe',
      year: '2009 — 2010',
    },
  ]

  return (
    <section id="education">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Education</h2>
      </div>
      <div className="skills-grid">
        {educations.map((edu, idx) => (
          <div className="skill-group" key={idx}>
            <div className="skill-group-title">{edu.degree}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted2)', lineHeight: '1.9' }}>
              {edu.institution}<br />
              <span style={{ color: 'var(--accent)' }}>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
