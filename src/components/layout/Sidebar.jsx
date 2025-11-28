import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  // Fungsi helper untuk menandai menu aktif
  const isActive = (path) => {
    return location.pathname === path ? '#4e73df' : 'transparent'
  }

  return (
    <aside style={{ width: '260px', backgroundColor: '#2c3e50', color: '#ecf0f1', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px', borderBottom: '1px solid #34495e', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Admin PT. MPN</h2>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <li>
          <Link to="/dashboard" style={linkStyle(isActive('/dashboard'))}>Dashboard</Link>
        </li>
        <li>
          <Link to="/company" style={linkStyle(isActive('/company'))}>Profil Perusahaan</Link>
        </li>
        <li>
          <Link to="/training" style={linkStyle(isActive('/training'))}>Kelola Pelatihan</Link>
        </li>
        <li>
          <Link to="/services" style={linkStyle(isActive('/services'))}>Kelola Layanan</Link>
        </li>
        <li>
          <Link to="/messages" style={linkStyle(isActive('/messages'))}>Pesan Masuk</Link>
        </li>
        <li>
          <Link to="/testimonials" style={linkStyle(isActive('/testimonials'))}>Testimoni</Link>
        </li>
        <li>
          <Link to="/gallery" style={linkStyle(isActive('/gallery'))}>Galeri</Link>
        </li>
        <li style={{ marginTop: '20px', borderTop: '1px solid #34495e', paddingTop: '20px' }}>
          <Link to="/profile" style={linkStyle(isActive('/profile'))}>Edit Profil Saya</Link>
        </li>
        <li>
          <Link to="/login" style={{ ...linkStyle('transparent'), color: '#e74a3b' }}>Logout</Link>
        </li>
      </ul>
    </aside>
  )
}

// Style object untuk kerapian
const linkStyle = (bgColor) => ({
  display: 'block',
  padding: '12px 20px',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: bgColor,
  transition: '0.3s',
  borderLeft: bgColor !== 'transparent' ? '4px solid white' : '4px solid transparent'
})

export default Sidebar