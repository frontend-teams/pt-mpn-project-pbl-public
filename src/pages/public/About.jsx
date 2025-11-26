import React from 'react'

const About = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Bagian Header Profil */}
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>Tentang PT. MPN</h1>
        <p style={{ fontSize: '18px', color: '#7f8c8d' }}>
          Mitra Strategis Pengembangan SDM dan Pelatihan Berkualitas
        </p>
      </section>

      {/* Bagian Sejarah / Pendahuluan */}
      <section style={{ marginBottom: '40px', lineHeight: '1.8' }}>
        <h2 style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px', display: 'inline-block' }}>Profil Perusahaan</h2>
        <p style={{ marginTop: '20px' }}>
          <strong>PT. MULTIARTHA PUNDIMAS NAWASENA (MPN)</strong> didirikan pada 20 Januari 2025 di Kabupaten Bogor. 
          Perusahaan ini lahir dari perjalanan panjang para pendiri yang telah berkiprah di berbagai sektor strategis—mulai dari perbankan, pendidikan, industri finansial, kewirausahaan, hingga media televisi dan cetak.
        </p>
        <p>
          Beragam latar belakang tersebut menyatu menjadi fondasi kuat yang melahirkan PT MPN. 
          Dengan jaringan luas dan rekam jejak profesional, kami hadir sebagai perusahaan pelatihan, pengembangan SDM, dan konsultansi manajemen yang kompeten, inovatif, dan berdaya saing tinggi.
        </p>
      </section>

      {/* Bagian Visi & Misi */}
      <section style={{ marginBottom: '40px', backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Visi & Misi</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Visi */}
          <div>
            <h3 style={{ color: '#2980b9' }}>Visi</h3>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Menjadi perusahaan pelatihan dan pengembangan SDM profesional, inovatif, dan terpercaya."
            </p>
          </div>

          {/* Misi */}
          <div>
            <h3 style={{ color: '#2980b9' }}>Misi</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Menyelenggarakan pelatihan berkualitas berbasis kebutuhan industri.</li>
              <li>Mengembangkan SDM unggul dan berdaya saing.</li>
              <li>Menjadi mitra strategis perusahaan & UMKM.</li>
              <li>Menyediakan konsultasi manajemen yang efektif.</li>
              <li>Mendukung pendidikan nonformal yang terjangkau.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bagian Legalitas & Keunggulan */}
      <section>
        <h2 style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px', display: 'inline-block' }}>Legalitas & Keunggulan</h2>
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>Data Legalitas</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
              <li style={{ marginBottom: '8px' }}><strong>NIB:</strong> 1102250128829</li>
              <li style={{ marginBottom: '8px' }}><strong>NPWP:</strong> 1091.0312.1136.3899</li>
              <li style={{ marginBottom: '8px' }}><strong>SK Kemenkumham:</strong> AHU-0001431.AH.01.01.Tahun 2025</li>
            </ul>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>Keunggulan Kami</h3>
            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
              <li>Dipercaya oleh BBPVP Bekasi (Kemnaker RI) sebagai tempat pemagangan.</li>
              <li>Pengalaman event skala kecil hingga besar.</li>
              <li>Sinergi dengan berbagai perusahaan pengembangan SDM.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About