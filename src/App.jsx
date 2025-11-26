import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Import Layouts
import PublicLayout from './layouts/PublicLayout'
import AdminLayout from './layouts/AdminLayout'

// Import Pages Public
import Home from './pages/public/Home'
import About from './pages/public/About'
import Services from './pages/public/Services'
import ServiceDetail from './pages/public/ServiceDetail'
import Training from './pages/public/Training'
import TrainingDetail from './pages/public/TrainingDetail'
import Team from './pages/public/Team'
import Contact from './pages/public/Contact'

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
        {/* === AREA PUBLIK === */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:id" element={<TrainingDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* === AREA LOGIN ADMIN (Tanpa Sidebar) === */}
        <Route path="/admin/login" element={<Login />} />

        {/* === AREA DASHBOARD ADMIN (Pakai Sidebar) === */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/training" element={<ManageTraining />} />
          <Route path="/admin/services" element={<ManageServices />} />
          <Route path="/admin/company" element={<ManageCompany />} />
          <Route path="/admin/messages" element={<Messages />} />
          <Route path="/admin/testimonials" element={<Testimonials />} />
          <Route path="/admin/gallery" element={<Gallery />} />
          <Route path="/admin/profile" element={<EditAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App