import React from 'react'
import { Link } from 'react-router-dom'
import { homeHotels } from '../assets/hotelsData'

const SingleHotelCard = ({ hotel }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group h-full">
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                    <span className="text-orange-500 text-lg">★</span> {hotel.rating}
                </div>
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{hotel.name}</h3>
                
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {hotel.location}
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-gray-900">${hotel.price}</span>
                        <span className="text-gray-500 text-sm ml-1">/ night</span>
                    </div>
                    
                    <Link 
                        to={`/rooms/${hotel.id}`} 
                        className="bg-[#e58c0f] hover:bg-[#e98503] text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer text-sm"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Hotelcard = () => {
    return (
        <section className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="flex items-center justify-between mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Hotels</h2>
                    <p className="text-gray-500">Pick from our best selection of luxury stays worldwide.</p>
                </div>
                <button className="text-indigo-600 font-semibold hover:underline">View All</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {homeHotels.map((hotel) => (
                    <SingleHotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </section>
    )
}

export default Hotelcard
