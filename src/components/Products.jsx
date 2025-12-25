import React from 'react'

const Products = () => {
  const products = [
    {
      icon: '⚽',
      title: 'Team Uniforms',
      description: 'Custom-designed jerseys, shorts, and accessories with advanced moisture-wicking technology and durable construction.'
    },
    {
      icon: '🏃',
      title: 'Training Equipment',
      description: 'Professional-grade training gear including cones, agility ladders, resistance bands, and performance monitoring tools.'
    },
    {
      icon: '🥅',
      title: 'Sports Equipment',
      description: 'High-quality balls, nets, goals, and specialized equipment tailored to each sport\'s requirements.'
    },
    {
      icon: '👟',
      title: 'Footwear',
      description: 'Elite performance shoes engineered for optimal traction, support, and comfort across all playing surfaces.'
    },
    {
      icon: '🛡️',
      title: 'Protective Gear',
      description: 'Safety equipment including helmets, pads, guards, and protective accessories meeting international safety standards.'
    },
    {
      icon: '🎒',
      title: 'Team Accessories',
      description: 'Bags, water bottles, towels, and essential accessories for training and competition.'
    }
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Premium equipment for elite athletes</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

