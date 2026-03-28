import React from 'react'
import Navbar from './componets/Navbar'
import Home from './Pages/Home'
import AllHotels from './Pages/AllHotels'
import RoomDetailes from './Pages/RoomDetailes'
import MyBookings from './Pages/MyBookings'
import { useLocation, Routes, Route } from 'react-router-dom'

// Dashboard Imports
import DashboardLayout from './Pages/DashboardHotel/Layout'
import Dashboard from './Pages/DashboardHotel/Dashboard'
import AddHotel from './Pages/DashboardHotel/AddHotel'
import HotelsList from './Pages/DashboardHotel/HotelsList'

const App = () => {

  const location = useLocation()
  const isDashboard = location.pathname.includes("dashboard")
  return (
    <>
      {!isDashboard && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<AllHotels />} />
          <Route path="/rooms/:id" element={<RoomDetailes />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/dashboard/add" element={<DashboardLayout><AddHotel /></DashboardLayout>} />
          <Route path="/dashboard/list" element={<DashboardLayout><HotelsList /></DashboardLayout>} />
          {/* Admin Dashboard Routes */}
          <Route path="/dashboard-hotel" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/dashboard-hotel/add" element={<DashboardLayout><AddHotel /></DashboardLayout>} />
          <Route path="/dashboard-hotel/list" element={<DashboardLayout><HotelsList /></DashboardLayout>} />
          {/* <Route path="/hotels" element={<Hotels />} /> */}
          {/* <Route path="/experience" element={<Experience />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App