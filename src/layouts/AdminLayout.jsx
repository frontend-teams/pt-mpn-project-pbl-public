import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Statis di Kiri */}
      <Sidebar />

      {/* Konten Halaman Admin di Kanan */}
      <main style={{ flex: 1, padding: '30px', backgroundColor: '#f4f4f4' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout