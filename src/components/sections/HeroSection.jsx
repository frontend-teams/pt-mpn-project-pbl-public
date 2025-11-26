import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section id="hero" style={{ padding: '100px 20px', textAlign: 'center', background: '#f0f0f0' }}>
      <h1>PT. Multiartha Pundimas Nawasena</h1>
      <p>Mitra Strategis Pengembangan SDM dan Pelatihan Berkualitas</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/training" style={{ marginRight: '10px', padding: '10px 20px', background: 'blue', color: 'white' }}>Lihat Pelatihan</Link>
        <Link to="/contact" style={{ padding: '10px 20px', border: '1px solid blue', color: 'blue' }}>Hubungi Kami</Link>
      </div>
    </section>
  )
}

export default HeroSection