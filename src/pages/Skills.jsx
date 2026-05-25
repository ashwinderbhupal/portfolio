import ScrollReveal from '../components/ScrollReveal.jsx'
import SkillBar from '../components/SkillBar.jsx'
import LearningRing from '../components/LearningRing.jsx'
import {
  skillCategories,
  certifications,
  currentlyLearning,
  skillsPageCopy
} from '../data/skills.js'

const Skills = () => {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Capabilities</span>
            <h1 className="section-title">{skillsPageCopy.title}</h1>
            <p className="section-subtitle">{skillsPageCopy.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="skills-category-grid">
            {skillCategories.map((category, i) => (
              <ScrollReveal key={category.name} delay={i * 80}>
                <article className="skill-category-card">
                  <div className="skill-category-header">
                    <span aria-hidden="true">{category.icon}</span>
                    {category.name}
                  </div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Learning</span>
              <h2 className="section-title">{skillsPageCopy.learningLabel}</h2>
            </div>
          </ScrollReveal>
          <div className="learning-grid">
            {currentlyLearning.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 80}>
                <LearningRing name={item.name} progress={item.progress} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Credentials</span>
              <h2 className="section-title">{skillsPageCopy.certificationsLabel}</h2>
            </div>
          </ScrollReveal>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <ScrollReveal key={`${cert.name}-${cert.issuer}`} delay={(i % 3) * 60}>
                <article className="cert-card">
                  <div className="cert-header">
                    <span className="cert-issuer-badge">{cert.issuer}</span>
                    <span className="cert-year-badge">{cert.year}</span>
                  </div>
                  <h3 className="cert-name">{cert.name}</h3>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
