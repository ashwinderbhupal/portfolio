import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { IconCheck, IconChevron } from '../components/icons.jsx'
import {
  experiences,
  leadership,
  metrics,
  skillsDeveloped,
  experiencePageCopy
} from '../data/experience.js'

const parseStat = (valueStr) => {
  const hasSuffix = valueStr.endsWith('+')
  const suffix = hasSuffix ? '+' : ''
  const num = parseFloat(valueStr.replace('+', ''))
  return { num, suffix }
}

const Experience = () => {
  const [expandedIds, setExpandedIds] = useState(() => new Set([experiences[0]?.id]))

  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Career</span>
            <h1 className="section-title">{experiencePageCopy.title}</h1>
            <p className="section-subtitle">{experiencePageCopy.subtitle}</p>
            <div className="metrics-grid">
              {metrics.map((metric, i) => {
                const { num, suffix } = parseStat(metric.value)
                return (
                  <div key={metric.label} className="metric-box">
                    <span className="metric-value">
                      <CountUp end={num} suffix={suffix} duration={1200 + i * 100} />
                    </span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Work</span>
              <h2 className="section-title">{experiencePageCopy.workLabel}</h2>
            </div>
          </ScrollReveal>

          {experiences.map((exp) => {
            const expanded = expandedIds.has(exp.id)
            return (
              <ScrollReveal key={exp.id}>
                <article className="experience-card">
                  <div className="experience-card-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">{exp.company}</p>
                      <p className="experience-period">
                        {exp.period} · {exp.duration}
                      </p>
                    </div>
                    <span className="tag">{exp.type}</span>
                  </div>
                  <p className="experience-desc">{exp.description}</p>

                  <div className={`experience-expandable${expanded ? ' expanded' : ''}`}>
                    <ul className="experience-achievements">
                      {exp.achievements.map((item) => (
                        <li key={item}>
                          <IconCheck />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="expand-toggle"
                    onClick={() => toggleExpanded(exp.id)}
                    aria-expanded={expanded}
                  >
                    <span>{expanded ? 'Hide details' : 'Show details'}</span>
                    <IconChevron className={`expand-chevron icon-sm${expanded ? ' rotated' : ''}`} />
                  </button>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Community</span>
              <h2 className="section-title">{experiencePageCopy.leadershipLabel}</h2>
            </div>
          </ScrollReveal>
          <div className="leadership-grid">
            {leadership.map((role, i) => (
              <ScrollReveal key={`${role.role}-${role.org}`} delay={i * 80}>
                <article className="card card-glass card-featured">
                  <h3 className="leadership-role">{role.role}</h3>
                  <p className="leadership-org">{role.org}</p>
                  <p className="leadership-period">{role.period}</p>
                  <p className="leadership-desc">{role.description}</p>
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
              <span className="section-label">Growth</span>
              <h2 className="section-title">{experiencePageCopy.skillsDevelopedLabel}</h2>
            </div>
          </ScrollReveal>
          <div className="skills-developed-grid">
            {skillsDeveloped.map((group, i) => (
              <ScrollReveal key={group.title} delay={i * 80}>
                <article className="card">
                  <h3 className="skills-developed-title">{group.title}</h3>
                  <div className="skills-developed-list">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
