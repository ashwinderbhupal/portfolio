import { useEffect, useRef } from 'react'

const directionClass = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
}

const ScrollReveal = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  stagger = false,
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    if (stagger) {
      Array.from(el.children).forEach((child, i) => {
        child.style.transitionDelay = `${i * 100}ms`
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, stagger])

  const base = directionClass[direction] ?? 'reveal'

  return (
    <div ref={ref} className={`${base} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default ScrollReveal
