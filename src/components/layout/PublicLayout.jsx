import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      
      {/* Outlet adalah tempat di mana konten halaman (Home, About, dll) akan dirender */}
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default PublicLayout