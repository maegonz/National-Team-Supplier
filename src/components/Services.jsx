import React from 'react'

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Custom Design & Branding',
      description: 'Work with our design team to create unique uniforms and equipment that reflect your team\'s identity and values.'
    },
    {
      number: '02',
      title: 'Bulk Ordering & Logistics',
      description: 'Efficient supply chain management with flexible ordering, fast delivery, and worldwide shipping capabilities.'
    },
    {
      number: '03',
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensuring all equipment meets international competition standards.'
    },
    {
      number: '04',
      title: 'Technical Support',
      description: 'Expert consultation and ongoing support from our team of sports equipment specialists.'
    },
    {
      number: '05',
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance services and quick repair solutions to keep your equipment in peak condition.'
    },
    {
      number: '06',
      title: 'Partnership Programs',
      description: 'Long-term partnership agreements with exclusive benefits, priority support, and customized solutions.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive support for national teams</p>
        </div>
        <div className="services-content">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

