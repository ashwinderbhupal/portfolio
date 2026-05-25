import { useEffect, useRef, useState } from 'react'

const levelLabel = (pct) => {
  if (pct >= 90) return 'Expert'
  if (pct >= 71) return 'Advanced'
  if (pct >= 50) return 'Intermediate'
  return 'Beginner'
}

const SkillBar = ({ name, level }) => {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-row-header">
        <span>{name}</span>
        <span className="skill-level-label">{levelLabel(level)}</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${animated ? 'animated' : ''}`}
          style={{ '--skill-level': `${level}%` }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${level}%`}
        />
      </div>
    </div>
  )
}

export default SkillBar
