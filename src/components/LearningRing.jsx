import { useEffect, useRef, useState } from 'react'

const RADIUS = 36
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const LearningRing = ({ name, progress }) => {
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
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const offset = animated
    ? CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE
    : CIRCUMFERENCE

  const gradientId = `ring-grad-${name.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="learning-card" ref={ref}>
      <div className="learning-ring">
        <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0071e3" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <circle
            className="learning-ring-bg"
            cx="44"
            cy="44"
            r={RADIUS}
          />
          <circle
            className="learning-ring-progress"
            cx="44"
            cy="44"
            r={RADIUS}
            stroke={`url(#${gradientId})`}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
          <text
            x="44"
            y="44"
            textAnchor="middle"
            dominantBaseline="central"
            className="learning-ring-text"
            style={{ transform: 'rotate(90deg)', transformOrigin: '44px 44px' }}
          >
            {animated ? `${progress}%` : '0%'}
          </text>
        </svg>
      </div>
      <p className="learning-name">{name}</p>
    </div>
  )
}

export default LearningRing
