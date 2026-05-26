import { useMemo, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { IconSearch } from '../components/icons.jsx'
import { projects, projectFilters, projectsPageCopy } from '../data/projects.js'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categoriesCount = useMemo(
    () => new Set(projects.map((p) => p.category)).size,
    []
  )

  const featuredCount = projects.filter((p) => p.featured).length

  const filtered = projects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter
    const q = searchTerm.toLowerCase()
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q)
    return matchesFilter && matchesSearch
  })

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Work</span>
            <h1 className="section-title">{projectsPageCopy.title}</h1>
            <p className="section-subtitle">{projectsPageCopy.subtitle}</p>
            <div className="stats-row">
              <div className="stats-row-item">
                <div className="stats-row-value">
                  <CountUp end={projects.length} duration={1200} />
                </div>
                <div className="stats-row-label">Total Projects</div>
              </div>
              <div className="stats-row-item">
                <div className="stats-row-value">
                  <CountUp end={featuredCount} duration={1000} />
                </div>
                <div className="stats-row-label">Featured</div>
              </div>
              <div className="stats-row-item">
                <div className="stats-row-value">
                  <CountUp end={categoriesCount} duration={900} />
                </div>
                <div className="stats-row-label">Categories</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="projects-toolbar">
              <div className="filter-pills" role="tablist" aria-label="Filter projects">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter}
                    className={`filter-pill${activeFilter === filter ? ' active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="search-wrap">
                <IconSearch />
                <input
                  type="search"
                  className="search-input"
                  placeholder={projectsPageCopy.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search projects"
                />
              </div>
            </div>
          </ScrollReveal>

          {filtered.length === 0 ? (
            <p className="empty-state">{projectsPageCopy.emptyMessage}</p>
          ) : (
            <div className="projects-grid">
              {filtered.map((project, i) => (
                <ScrollReveal key={project.id} delay={(i % 3) * 80}>
                  <article className="project-card project-card-full">
                    <div className="project-card-image-wrap">
                      <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        className="project-card-image"
                        loading="lazy"
                      />
                      {project.featured && (
                        <span className="project-featured-badge">Featured</span>
                      )}
                      <div className="project-card-image-overlay">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-overlay-btn"
                          >
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-overlay-btn"
                          >
                            {project.demoLabel || 'Demo'}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="project-card-body">
                      <span className="tag">{project.category}</span>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-desc project-card-desc-clamp">
                        {project.description}
                      </p>
                      <div className="project-card-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="project-card-meta">
                        <span>{project.year}</span>
                        <span>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-link"
                            >
                              GitHub
                            </a>
                          )}
                          {project.github && project.demo && ' · '}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-link"
                            >
                              {project.demoLabel || 'Demo'}
                            </a>
                          )}
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Projects
