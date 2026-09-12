function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Git", icon: "🔧" }
  ];

  return (
    <section id="skills" className="section">
      <p className="section-label">WHAT I KNOW</p>
      <h2>My <span>Skills</span></h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;