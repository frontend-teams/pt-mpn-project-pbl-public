import React, { useState } from 'react'

const ManageCompany = () => {
  // State diisi dengan data asli dari dokumen Company_Profile_MPN_NEW.docx
  const [profile, setProfile] = useState({
    name: 'PT. MULTIARTHA PUNDIMAS NAWASENA', // [cite: 10]
    email: 'ptmultiarthapundimasnawasena@gmail.com', // [cite: 17]
    phone: '0821-1472-6830', // [cite: 16]
    address: 'Ruko Sentra Eropa Blok B16, Ciangsana, Gunung Putri, Bogor 16968', // [cite: 15]
    
    // Ringkasan dari Bab 1 Pendahuluan [cite: 4, 5, 7]
    description: 'Didirikan pada 20 Januari 2025 di Kabupaten Bogor. Lahir dari sinergi profesional di bidang perbankan, pendidikan, dan media, MPN hadir sebagai perusahaan pelatihan, pengembangan SDM, dan konsultansi manajemen yang relevan, inovatif, dan berdaya saing tinggi.',
    
    // Visi dari Bab 7 [cite: 72]
    vision: '"Menjadi perusahaan pelatihan dan pengembangan SDM profesional, inovatif, dan terpercaya."',
    
    // Misi dari Bab 7 [cite: 74, 75, 76, 77, 78]
    mission: '1. Menyelenggarakan pelatihan berkualitas berbasis kebutuhan industri.\n2. Mengembangkan SDM unggul dan berdaya saing.\n3. Menjadi mitra strategis perusahaan & UMKM.\n4. Menyediakan konsultasi manajemen yang efektif.\n5. Mendukung pendidikan nonformal yang terjangkau.'
  })

  // Fungsi saat input diketik
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  // Fungsi saat tombol simpan ditekan
  const handleSubmit = (e) => {
    e.preventDefault()
    // Di sini nanti logika koneksi ke Backend untuk update database
    alert('Profil Perusahaan Berhasil Diperbarui!')
    console.log('Data saved:', profile)
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Kelola Profil Perusahaan</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
        {/* Baris 1: Nama & Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nama Perusahaan</label>
            <input 
              type="text" 
              name="name" 
              value={profile.name} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Resmi</label>
            <input 
              type="email" 
              name="email" 
              value={profile.email} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
        </div>

        {/* Baris 2: Telepon & Alamat */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nomor Telepon</label>
            <input 
              type="text" 
              name="phone" 
              value={profile.phone} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Alamat Lengkap</label>
            <input 
              type="text" 
              name="address" 
              value={profile.address} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
        </div>

        {/* Deskripsi / Sejarah */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Deskripsi Singkat / Sejarah</label>
          <textarea 
            name="description" 
            rows="4"
            value={profile.description} 
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          ></textarea>
        </div>

        {/* Baris 3: Visi & Misi */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Visi</label>
            <textarea 
              name="vision" 
              rows="6"
              value={profile.vision} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            ></textarea>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Misi</label>
            <textarea 
              name="mission" 
              rows="6"
              value={profile.mission} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            ></textarea>
          </div>
        </div>

        <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#4e73df', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', width: 'fit-content' }}>
          Simpan Perubahan
        </button>
      </form>
    </div>
  )
}

export default ManageCompany