import React, { useState } from 'react'

const Messages = () => {
  // Data Dummy Pesan Masuk
  const [messages, setMessages] = useState([
    { id: 1, name: 'Budi Santoso', email: 'budi@gmail.com', content: 'Halo, saya ingin bertanya tentang pelatihan K3.', date: '2025-11-20' },
    { id: 2, name: 'Siti Aminah', email: 'siti@yahoo.com', content: 'Apakah ada diskon untuk pendaftaran grup?', date: '2025-11-21' },
    { id: 3, name: 'PT Maju Jaya', email: 'hrd@majujaya.com', content: 'Kami ingin mengadakan in-house training.', date: '2025-11-22' },
  ])

  // Fungsi Hapus Pesan
  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus pesan ini?')) {
      setMessages(messages.filter(msg => msg.id !== id))
    }
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Pesan Masuk (Inbox)</h2>

      {messages.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Belum ada pesan masuk.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fc', textAlign: 'left' }}>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Tanggal</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Nama Pengirim</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Isi Pesan</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee', color: '#666', fontSize: '14px' }}>{msg.date}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <strong>{msg.name}</strong><br/>
                  <small style={{ color: '#4e73df' }}>{msg.email}</small>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{msg.content}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                  <button 
                    onClick={() => handleDelete(msg.id)}
                    style={{ padding: '6px 12px', backgroundColor: '#e74a3b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Messages