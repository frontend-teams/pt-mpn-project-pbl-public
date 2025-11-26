import React from 'react'
import { useParams, Link } from 'react-router-dom'

const TrainingDetail = () => {
  const { id } = useParams() // Mengambil ID pelatihan dari URL
  return (
    <div style={{ padding: '20px' }}>
      <Link to="/training">← Kembali ke Daftar Pelatihan</Link>
      <h1>Detail Pelatihan (ID: {id})</h1>
      <p>Halaman ini akan menampilkan detail lengkap pelatihan (Kurikulum, Biaya, Jadwal).</p>
      <p><strong>Penanggung Jawab: Selly</strong></p>
    </div>
  )
}

export default TrainingDetail