import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-text">Elite Sports</span>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#products" className="nav-link" onClick={(e) => handleNavClick(e, 'products')}>Products</a></li>
            <li><a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

