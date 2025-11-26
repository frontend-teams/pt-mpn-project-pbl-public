import React from 'react'
import { Link } from 'react-router-dom'

const TrainingPreview = () => {
  return (
    <section id="training-preview" style={{ padding: '50px 20px' }}>
      <h2>Program Pelatihan Unggulan</h2>
      <p>Tingkatkan kompetensi Anda bersama kami.</p>
      
      {/* Nanti di sini Yoga akan membuat Grid Card */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>Card Pelatihan 1</div>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>Card Pelatihan 2</div>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>Card Pelatihan 3</div>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/training">Lihat Semua Pelatihan →</Link>
      </div>
    </section>
  )
}

export default TrainingPreview