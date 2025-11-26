import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ServiceDetail = () => {
  const { id } = useParams()
  return (
    <div style={{ padding: '20px' }}>
      <Link to="/services">← Kembali ke Daftar Layanan</Link>
      <h1>Detail Layanan (ID: {id})</h1>
      <p>Halaman ini menjelaskan spesifikasi layanan secara rinci.</p>
      <p><strong>Penanggung Jawab: Wulan</strong></p>
    </div>
  )
}

export default ServiceDetail