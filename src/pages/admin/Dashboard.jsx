import React from 'react'

const Dashboard = () => {
  // Data Dummy untuk Statistik
  const stats = [
    { label: 'Total Pelatihan', value: 12, color: '#4e73df' },
    { label: 'Total Layanan', value: 5, color: '#1cc88a' },
    { label: 'Pesan Masuk', value: 24, color: '#f6c23e' },
    { label: 'Total Admin', value: 3, color: '#36b9cc' },
  ]

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Dashboard Overview</h2>
      
      {/* Kartu Statistik */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderLeft: `5px solid ${stat.color}`
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#888', fontSize: '14px', textTransform: 'uppercase' }}>{stat.label}</h4>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Tabel Aktivitas Dummy */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px' }}>Aktivitas Terbaru</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', backgroundColor: '#f8f9fc' }}>
              <th style={{ padding: '10px' }}>User</th>
              <th style={{ padding: '10px' }}>Aksi</th>
              <th style={{ padding: '10px' }}>Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Admin Inayah</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Menambahkan pelatihan baru "Basic K3"</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>10 menit lalu</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Pengunjung</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Mengirim pesan kontak</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>1 jam lalu</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Admin Zharfan</td>
              <td style={{ padding: '10px' }}>Mengupdate layanan "Konsultasi HR"</td>
              <td style={{ padding: '10px' }}>Hari ini, 09:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard