import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside style={{ width: '250px', backgroundColor: '#333', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Admin Panel</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <li><Link to="/admin/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link></li>
        <li><Link to="/admin/training" style={{ color: 'white', textDecoration: 'none' }}>Kelola Pelatihan</Link></li>
        <li><Link to="/admin/services" style={{ color: 'white', textDecoration: 'none' }}>Kelola Layanan</Link></li>
        <li><Link to="/admin/company" style={{ color: 'white', textDecoration: 'none' }}>Profil Perusahaan</Link></li>
        <li><Link to="/admin/messages" style={{ color: 'white', textDecoration: 'none' }}>Pesan Masuk</Link></li>
        <li><Link to="/admin/testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimoni</Link></li>
        <li><Link to="/admin/gallery" style={{ color: 'white', textDecoration: 'none' }}>Galeri</Link></li>
        <li><Link to="/admin/profile" style={{ color: 'white', textDecoration: 'none' }}>Edit Profil Admin</Link></li>
        <li style={{ marginTop: '20px', borderTop: '1px solid #555', paddingTop: '10px' }}>
          <Link to="/" style={{ color: '#ff6b6b', textDecoration: 'none' }}>Logout / Ke Home</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar