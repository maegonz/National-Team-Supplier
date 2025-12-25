import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      content: "Elite Sports has been our equipment partner for over 10 years. Their quality and service are unmatched.",
      author: "National Team Coach",
      role: "Championship Winner 2023"
    },
    {
      content: "The custom uniforms they designed perfectly captured our team's spirit. Outstanding quality and attention to detail.",
      author: "Team Manager",
      role: "International Competition"
    },
    {
      content: "Reliable, professional, and always delivering on time. They understand the needs of elite athletes.",
      author: "Sports Director",
      role: "National Sports Federation"
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Champions</h2>
          <p className="section-subtitle">What national teams say about us</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

