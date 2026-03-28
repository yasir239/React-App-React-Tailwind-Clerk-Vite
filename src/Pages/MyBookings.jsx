import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const MyBookings = () => {
    const { user, isLoaded } = useUser()
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        // Load bookings from localStorage
        const storedBookings = JSON.parse(localStorage.getItem('myBookings')) || []
        setBookings(storedBookings)
    }, [])

    const handleCancel = (bookingId) => {
        const updatedBookings = bookings.filter(b => b.id !== bookingId)
        setBookings(updatedBookings)
        localStorage.setItem('myBookings', JSON.stringify(updatedBookings))
    }

    if (!isLoaded) return null

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                
                {/* Header with User Info */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-50 shadow-lg">
                        <img src={user?.imageUrl} alt={user?.fullName} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.firstName}!</h1>
                        <p className="text-gray-500">You have {bookings.length} active bookings in your schedule.</p>
                    </div>
                </div>

                {/* Bookings List */}
                <div className="space-y-10">
                    <h2 className="text-2xl font-bold text-gray-900">Your Recent Bookings</h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col lg:flex-row group">
                                {/* Hotel Image */}
                                <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden relative">
                                    <img src={booking.hotelImage} alt={booking.hotelName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm border border-white/50">
                                        ID: {booking.id}
                                    </div>
                                </div>

                                {/* Booking Details */}
                                <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition mb-2">{booking.hotelName}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                                                <span className="flex items-center gap-1">👤 {booking.guests} Guests</span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                                                <span className="flex items-center gap-1">💳 {booking.payment}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-bold text-indigo-600">${booking.price}</p>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Total Paid</p>
                                        </div>
                                    </div>

                                    {/* Dates Grid */}
                                    <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase mb-1 tracking-wider">Check-in</p>
                                            <p className="text-lg font-bold text-gray-800">{new Date(booking.checkIn).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                            <p className="text-xs text-indigo-500 font-medium mt-1 uppercase tracking-widest">14:00 PM</p>
                                        </div>
                                        <div className="border-l border-gray-200 pl-6">
                                            <p className="text-xs font-bold text-gray-400 uppercase mb-1 tracking-wider">Check-out</p>
                                            <p className="text-lg font-bold text-gray-800">{new Date(booking.checkOut).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                            <p className="text-xs text-indigo-500 font-medium mt-1 uppercase tracking-widest">12:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-50">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-3 h-3 rounded-full ${booking.status === 'Confirmed' ? 'bg-green-500' : 'bg-orange-400 animate-pulse'}`}></span>
                                            <span className="font-bold text-gray-700 capitalize text-sm tracking-wide">{booking.status}</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <button 
                                                onClick={() => handleCancel(booking.id)}
                                                className="text-sm font-bold text-gray-400 hover:text-red-500 transition cursor-pointer"
                                            >
                                                Cancel Booking
                                            </button>
                                            <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-2 rounded-xl font-bold text-sm transition-all shadow-sm cursor-pointer">
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {bookings.length === 0 && (
                            <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-400 mb-4">No active bookings found.</h3>
                                <Link to="/hotels" className="bg-[#e58c0f] text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition inline-block">
                                    Start Searching Hotels
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookings