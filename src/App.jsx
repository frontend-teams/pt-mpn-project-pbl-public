import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Import Layouts
import AdminLayout from './layouts/AdminLayout'

// Import Pages Admin
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ManageTraining from './pages/admin/ManageTraining'
import ManageServices from './pages/admin/ManageServices'
import ManageCompany from './pages/admin/ManageCompany'
import Messages from './pages/admin/Messages'
import Testimonials from './pages/admin/Testimonials'
import Gallery from './pages/admin/Gallery'
import EditAdmin from './pages/admin/EditAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Utama: Redirect langsung ke Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Halaman Login (Berdiri Sendiri) */}
        <Route path="/login" element={<Login />} />

        {/* Halaman Dashboard dengan Sidebar Admin */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training" element={<ManageTraining />} />
          <Route path="/services" element={<ManageServices />} />
          <Route path="/company" element={<ManageCompany />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile" element={<EditAdmin />} />
        </Route>

        {/* Fallback: Jika halaman tidak ditemukan, kembalikan ke login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App