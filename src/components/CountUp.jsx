import { useEffect, useRef, useState } from 'react'

const CountUp = ({ end, suffix = '', decimals = 0, duration = 1500, className = '' }) => {
  const [display, setDisplay] = useState(decimals > 0 ? (0).toFixed(decimals) : '0')
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = end * eased

            if (progress < 1) {
              setDisplay(decimals > 0 ? current.toFixed(decimals) : String(Math.floor(current)))
              requestAnimationFrame(tick)
            } else {
              setDisplay(decimals > 0 ? end.toFixed(decimals) : String(end))
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  )
}

export default CountUp
