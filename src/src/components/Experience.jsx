function Experience() {
  const experiences = [
    {
      company: 'Boeing\nIndia',
      period: 'Sep 2025 — Present',
      location: 'Bengaluru, India',
      role: 'Sr. Full Stack Developer',
      bullets: [
        'Took ownership of a legacy enterprise app with 100+ JSP pages and built a step-by-step plan to modernize it without breaking anything in production.',
        'Went through the entire ticketing system code, mapped out how each module connects, and wrote documentation so new team members could get up to speed faster.',
        'Set up coding guidelines and a review checklist for the team. This helped us catch issues early and keep the codebase clean across developers.',
        'Built an automated versioning system for CSS and JS files so we no longer had to manually update cache-busting strings every time we deployed.',
        'Mentored 2 junior developers on Java and Spring patterns, doing regular code walkthroughs and pairing sessions.',
        'Handled a production incident where cached assets were causing users to see broken pages after deployment. Diagnosed the root cause and shipped a permanent fix within the same sprint.',
      ],
      tags: ['Java', 'Spring Boot', 'JSP', 'JavaScript', 'Node.js','Angular', 'GitLab CI/CD', 'AWS'],
    },
    {
      company: 'T-Systems\nICT India',
      period: 'Dec 2021 — Sep 2025',
      location: 'Bengaluru, India',
      role: 'Full Stack Developer - Consultant',
      bullets: [
        'Joined the CORS project midway and took it all the way to production release across Germany, UK, Spain, and 3 other European markets.',
        'Fixed a major performance issue where dealers with large datasets were timing out. Rewrote the queries, added batch processing, and brought response times down significantly.',
        'Migrated the entire frontend from an older design system to Xentry Theme. Touched every page, coordinated with designers, and kept things working during the transition.',
        'Built a two-way sync feature for asset commits so changes could flow in both directions between systems reliably.',
        'Wrote integrations with GitLab\'s API to handle user provisioning automatically instead of doing it manually for each new team member.',
        'Added role-based rendering to the frontend so users only see what they\'re allowed to access.',
      ],
      tags: ['Java', 'Spring Boot','Node.js','Angular','Vue.js', 'React.js', 'PostgreSQL', 'Docker', 'GitLab CI/CD', 'REST APIs'],
    },
    {
      company: 'Ubix\nSystems',
      period: 'Sep 2017 — Dec 2021',
      location: 'Bengaluru, India',
      role: 'Software Developer - Full Stack',
      bullets: [
        'Built a monitoring dashboard from scratch that collected and displayed real-time data from multiple sources. Handled heavy traffic without slowing down.',
        'Integrated Braintree as the payment gateway. Transactions became noticeably faster and we saw fewer payment failures.',
        'Wrote the REST APIs that powered both internal admin tools and the client-facing app. Kept them well-documented and easy to consume.',
        'Designed the database schema for a B2B product from the ground up. Later optimized it when queries started getting slow.',
        'Automated the client onboarding flow that used to take hours of manual work. Brought it down to a few clicks.',
        'Handled server migrations, OS upgrades, and security patches without any downtime.',
      ],
      tags: ['Java','Spring Boot', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Redis', 'Nginx'],
    },
  ]

  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">Experience</h2>
      </div>

      {experiences.map((exp, idx) => (
        <div className="exp-item" key={idx}>
          <div className="exp-meta">
            <div className="exp-company" dangerouslySetInnerHTML={{ __html: exp.company.replace('\n', '<br/>') }} />
            <div className="exp-period">{exp.period}</div>
            <div className="exp-location">{exp.location}</div>
            <div className="exp-role">{exp.role}</div>
          </div>
          <div className="exp-content">
            <ul className="exp-bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="exp-tags">
              {exp.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience
