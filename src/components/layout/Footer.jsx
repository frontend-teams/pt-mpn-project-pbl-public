import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '40px 20px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* Kolom 1: Identitas */}
        <div>
          <h3 style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px', display: 'inline-block', marginBottom: '15px' }}>PT. MPN</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Mitra strategis Anda dalam pelatihan, pengembangan SDM, dan konsultansi manajemen yang profesional dan terpercaya.
          </p>
        </div>

        {/* Kolom 2: Kontak */}
        <div>
          <h3 style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px', display: 'inline-block', marginBottom: '15px' }}>Hubungi Kami</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            <li style={{ marginBottom: '10px' }}>📍 Ruko Sentra Eropa Blok B16, Ciangsana, Gunung Putri, Bogor 16968</li>
            <li style={{ marginBottom: '10px' }}>📞 0821-1472-6830</li>
            <li style={{ marginBottom: '10px' }}>✉️ ptmultiarthapundimasnawasena@gmail.com</li>
          </ul>
        </div>

        {/* Kolom 3: Tautan Cepat */}
        <div>
          <h3 style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px', display: 'inline-block', marginBottom: '15px' }}>Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            <li style={{ marginBottom: '5px' }}><a href="/about" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Tentang Kami</a></li>
            <li style={{ marginBottom: '5px' }}><a href="/services" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Layanan</a></li>
            <li style={{ marginBottom: '5px' }}><a href="/training" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Pelatihan</a></li>
          </ul>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #34495e', fontSize: '13px' }}>
        &copy; {new Date().getFullYear()} PT. Multiartha Pundimas Nawasena. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer