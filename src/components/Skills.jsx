function Skills() {
  const skillGroups = [
    {
      title: 'Backend & Core',
      skills: ['Java', 'Node.js', 'Spring Boot', 'Spring MVC', 'JavaScript', 'Express.js', 'REST API', 'Microservices', 'OOPs'],
    },
    {
      title: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'Angular', 'CSS3', 'HTML5', 'SASS', 'Redux'],
    },
    {
      title: 'Databases & Brokers',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Apache Kafka', 'RabbitMQ'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx'],
    },
    {
      title: 'Tools & Testing',
      skills: ['Git', 'GitLab', 'Bitbucket', 'Jest', 'Mocha', 'Chai', 'Jira', 'Confluence', 'SonarQube', 'Postman'],
    },
    {
      title: 'Methodologies',
      skills: ['Agile', 'Scrum', 'CI/CD', 'Code Review', 'Technical Design'],
    },
  ]

  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <div className="skill-group" key={idx}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-list">
              {group.skills.map((skill, i) => (
                <span className="skill-pill" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
