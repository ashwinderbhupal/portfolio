import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="app-shell">
      <Nav />
      <main className="site-main">
        <div key={pathname} className="page-enter">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
