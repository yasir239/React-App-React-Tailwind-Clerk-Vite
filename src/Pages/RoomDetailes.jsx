import React, { useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { hotelsData, homeHotels } from '../assets/hotelsData'

const RoomDetailes = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // Find the hotel in any data set (static or custom-added by admin)
    const hotel = useMemo(() => {
        const stored = JSON.parse(localStorage.getItem('myHotels')) || []
        const all = [...hotelsData, ...homeHotels, ...stored]
        return all.find(h => h.id.toString() === id)
    }, [id])

    const handleConfirmBooking = () => {
        if (!hotel) return

        // Get existing bookings from localStorage
        const existingBookings = JSON.parse(localStorage.getItem('myBookings')) || []
        
        // Add new booking with some dummy details
        const newBooking = {
            id: `BK-${Math.floor(Math.random() * 9000) + 1000}`,
            hotelId: hotel.id,
            hotelName: hotel.name,
            hotelImage: hotel.image,
            guests: 2,
            checkIn: new Date().toISOString().split('T')[0],
            checkOut: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // +2 days
            price: hotel.price,
            status: 'Confirmed',
            payment: 'Visa'
        }

        const updatedBookings = [newBooking, ...existingBookings]
        localStorage.setItem('myBookings', JSON.stringify(updatedBookings))

        // Navigate to my-bookings
        navigate('/my-bookings')
    }

    if (!hotel) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-400">Hotel not found</h2>
                <Link to="/hotels" className="mt-4 text-indigo-600 underline">Back to Hotels</Link>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section with Image */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-10 left-0 w-full px-6 md:px-16 lg:px-24">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{hotel.name}</h1>
                                <a 
                                    href={hotel.mapUrl || "https://www.google.com/maps"} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition underline-offset-4 hover:underline"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    {hotel.location}
                                </a>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-white">
                                <p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-1">Price per night</p>
                                <p className="text-4xl font-bold">${hotel.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-16 lg:px-24 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {hotel.description || "Indulge in an extraordinary stay at this world-class destination. This room has been meticulously designed to provide you with the ultimate comfort and luxury. Whether you're here for business or leisure, our attention to detail and premium service will ensure an unforgettable experience."}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Room Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {hotel.features?.map(f => (
                                    <div key={f} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                            {f === "Wifi" && "📶"}
                                            {f === "Pool" && "🏊"}
                                            {f === "Sea View" && "🌊"}
                                            {f === "Spa" && "🧖"}
                                            {!["Wifi", "Pool", "Sea View", "Spa"].includes(f) && "✅"}
                                        </div>
                                        <span className="font-semibold text-gray-700">{f}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 opacity-50">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">❄️</div>
                                    <span className="font-semibold text-gray-400">AC</span>
                                </div>
                            </div>
                        </div>

                        {/* Details Table */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Room Details</h2>
                            <div className="grid grid-cols-2 gap-y-8">
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Room Type</p>
                                    <p className="text-xl font-bold text-gray-800">{hotel.type}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Rating</p>
                                    <div className="flex items-center gap-1">
                                        <span className="text-xl font-bold text-gray-800">{hotel.stars || hotel.rating}</span>
                                        <span className="text-orange-500 text-2xl font-bold">★</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Status</p>
                                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold capitalize ${
                                        hotel.availability === "Available" ? "bg-green-100 text-green-700" : 
                                        hotel.availability === "Limited" ? "bg-orange-100 text-orange-700" : 
                                        "bg-red-100 text-red-700"
                                    }`}>
                                        {hotel.availability || "Available"}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Check-in</p>
                                    <p className="text-xl font-bold text-gray-800">14:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Card Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Stay</h3>
                                <p className="text-gray-500 text-sm">Experience the ultimate luxury today.</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Total for 1 night</p>
                                    <p className="text-3xl font-bold text-gray-900">${hotel.price}</p>
                                </div>
                                
                                <button 
                                    disabled={hotel.availability === "Booked Out"}
                                    onClick={handleConfirmBooking}
                                    className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all transform active:scale-95 cursor-pointer ${
                                        hotel.availability === "Booked Out" 
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                                        : "bg-[#e58c0f] hover:bg-[#e98503] text-white hover:shadow-orange-200"
                                    }`}
                                >
                                    {hotel.availability === "Booked Out" ? "Currently Unavailabe" : "Confirm Booking"}
                                </button>
                            </div>

                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="text-green-500">✔</span>
                                    <span>Free Cancellation up to 24h before</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="text-green-500">✔</span>
                                    <span>No pre-payment required</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RoomDetailes