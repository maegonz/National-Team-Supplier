import React from 'react'

const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Official Equipment Supplier for National Teams</h1>
          <p className="hero-subtitle">Delivering excellence in sports equipment to champions worldwide</p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
            }}>Explore Products</a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>Get in Touch</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll" onClick={handleScrollDown}>
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

