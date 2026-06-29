function Projects() {
  const projects = [
    {
      num: '01',
      title: 'Git Workflow CLI Tool',
      desc: 'A personal CLI tool for automating repetitive Git workflows across multiple repositories. Handles branching, commits, and syncing with a single command.',
      tech: ['Node.js', 'CLI', 'Git API', 'Bash'],
      links: [],
    },
    {
      num: '02',
      title: 'Real-time Monitoring Dashboard',
      desc: 'Built a monitoring dashboard from scratch that collects and displays real-time data from multiple sources. Handles heavy traffic with WebSocket connections and efficient data streaming.',
      tech: ['React.js', 'Node.js', 'WebSocket', 'Redis', 'MongoDB'],
      links: [],
    },
    {
      num: '03',
      title: 'Enterprise Modernization Framework',
      desc: 'A step-by-step modernization plan for legacy JSP applications. Includes automated CSS/JS versioning, cache-busting, and incremental migration strategies.',
      tech: ['Java', 'Spring Boot', 'JavaScript', 'Docker', 'CI/CD'],
      links: [],
    },
    {
      num: '04',
      title: 'Tech Blog',
      desc: 'Personal tech blog covering Node.js patterns, deployment strategies, and lessons from production debugging across 8+ years of full stack development.',
      tech: ['Writing', 'Node.js', 'DevOps', 'System Design'],
      links: [],
    },
  ]

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-num">Project / {project.num}</div>
            <div className="project-title">{project.title}</div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span className="tag" key={i}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.links.map((link, i) => (
                <a href={link.url} target="_blank" rel="noreferrer" className="project-link" key={i}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
