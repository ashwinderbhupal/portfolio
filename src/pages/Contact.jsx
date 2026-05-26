import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import {
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconLocation,
  IconResume,
  IconSuccess,
  IconArrowRight
} from '../components/icons.jsx'
import { personal } from '../data/personal.js'
import { resumeUrl } from '../lib/assets.js'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const { contact } = personal

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1500)
  }

  const infoCards = [
    {
      icon: <IconMail />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: <IconLinkedIn />,
      label: 'LinkedIn',
      value: contact.linkedinHandle,
      href: personal.linkedin
    },
    {
      icon: <IconGitHub />,
      label: 'GitHub',
      value: contact.githubHandle,
      href: personal.github
    },
    {
      icon: <IconLocation />,
      label: 'Location',
      value: personal.location,
      href: null
    },
    {
      icon: <IconResume />,
      label: 'Resume',
      value: 'Download Resume',
      href: resumeUrl
    }
  ]

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">{contact.heroLabel}</span>
            <h1 className="section-title">{contact.heroTitle}</h1>
            <p className="section-subtitle">{contact.heroSubtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info-list">
            {infoCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 60}>
                {card.href ? (
                  <a
                    href={card.href}
                    target={
                      card.label === 'Resume' || card.label === 'LinkedIn' || card.label === 'GitHub'
                        ? '_blank'
                        : undefined
                    }
                    rel={card.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-info-card"
                  >
                    <div className="contact-info-icon">{card.icon}</div>
                    <div style={{ flex: 1 }}>
                      <p className="contact-info-label">{card.label}</p>
                      <p className="contact-info-value">
                        {card.value}
                        <IconArrowRight className="contact-info-arrow icon-sm" />
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="contact-info-card">
                    <div className="contact-info-icon">{card.icon}</div>
                    <div>
                      <p className="contact-info-label">{card.label}</p>
                      <p className="contact-info-value">{card.value}</p>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="right">
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <IconSuccess />
                  <p className="form-success-text">{contact.formSuccess}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-field-float">
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="form-input-float"
                      placeholder=" "
                      required
                      autoComplete="name"
                    />
                    <label htmlFor="contact-name" className="form-float-label">Name</label>
                  </div>

                  <div className="form-field-float">
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="form-input-float"
                      placeholder=" "
                      required
                      autoComplete="email"
                    />
                    <label htmlFor="contact-email" className="form-float-label">Email</label>
                  </div>

                  <div className="form-field-float">
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      className="form-input-float"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="contact-subject" className="form-float-label">Subject</label>
                  </div>

                  <div className="form-field-float">
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea-float"
                      placeholder=" "
                      rows={6}
                      required
                    />
                    <label htmlFor="contact-message" className="form-float-label">Message</label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary form-submit form-submit-gradient"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <span className="btn-spinner" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default Contact
