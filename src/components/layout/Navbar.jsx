import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>PT. MPN</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Tentang Kami</Link></li>
        <li><Link to="/services">Layanan</Link></li>
        <li><Link to="/training">Pelatihan</Link></li>
        <li><Link to="/contact">Kontak</Link></li>
        <li><Link to="/admin/login" style={{ color: 'red' }}>Login Admin</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar