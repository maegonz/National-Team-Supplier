import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">Trusted by champions, built for excellence</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Leading the Industry Since 1995</h3>
            <p>We are the premier equipment supplier for national teams across multiple sports disciplines. With over 25 years of experience, we've built a reputation for delivering top-quality sports equipment that meets the highest international standards.</p>
            <p>Our commitment to innovation, quality, and excellence has made us the trusted partner of championship-winning teams worldwide. We understand the unique needs of elite athletes and provide customized solutions that enhance performance.</p>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">National Teams</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Product Categories</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Equipment Showcase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

