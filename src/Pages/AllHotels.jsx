import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { hotelsData } from '../assets/hotelsData'

const priceRanges = [
    { label: "0 - 500", min: 0, max: 500 },
    { label: "500 - 1000", min: 500, max: 1000 },
    { label: "1000 - 1500", min: 1000, max: 1500 },
    { label: "2000 - 5000", min: 2000, max: 5000 }
]

const roomTypes = ["Single Room", "Double Room", "Family Suite"]

const AllHotels = () => {
    const [searchParams] = useSearchParams()
    const searchParam = searchParams.get('search')?.toLowerCase() || ''

    const [hotels, setHotels] = useState([])
    const [selectedPrice, setSelectedPrice] = useState(null)
    const [selectedRoom, setSelectedRoom] = useState([])
    const [hasPool, setHasPool] = useState(false)

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('myHotels')) || []
        setHotels([...stored, ...hotelsData])
    }, [])

    const toggleRoomType = (type) => {
        setSelectedRoom(prev => 
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        )
    }

    const filteredHotels = useMemo(() => {
        return hotels.filter(h => {
            const matchesSearch = !searchParam || 
                h.name.toLowerCase().includes(searchParam) || 
                h.location.toLowerCase().includes(searchParam)
            
            const matchesPrice = !selectedPrice || (h.price >= selectedPrice.min && h.price <= selectedPrice.max)
            const matchesRoom = selectedRoom.length === 0 || selectedRoom.includes(h.type)
            const matchesPool = !hasPool || h.features.includes("Pool")
            
            return matchesSearch && matchesPrice && matchesRoom && matchesPool
        })
    }, [hotels, searchParam, selectedPrice, selectedRoom, hasPool])

    return (
        <div className="bg-gray-50 min-h-screen pt-12">
            <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-10">
                
                {/* Filters Sidebar */}
                <aside className="lg:w-1/4 bg-white p-6 rounded-2xl shadow-sm h-fit space-y-8 border border-gray-100 mb-10 lg:mb-0">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Filters</h3>
                        
                        <div className="space-y-6">
                            {/* Room Type */}
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-3">Room Type</h4>
                                <div className="space-y-2">
                                    {roomTypes.map(type => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                            <input 
                                                type="checkbox" 
                                                className="w-5 h-5 accent-indigo-600 rounded"
                                                checked={selectedRoom.includes(type)}
                                                onChange={() => toggleRoomType(type)}
                                            />
                                            <span className="text-gray-600 group-hover:text-indigo-600 transition">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Amenities */}
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-3">Amenities</h4>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 accent-indigo-600 rounded"
                                        checked={hasPool}
                                        onChange={() => setHasPool(!hasPool)}
                                    />
                                    <span className="text-gray-600 group-hover:text-indigo-600 transition">Swimming Pool</span>
                                </label>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-3">Price per Night ($)</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input 
                                            type="radio" 
                                            name="price"
                                            className="w-5 h-5 accent-indigo-600"
                                            checked={selectedPrice === null}
                                            onChange={() => setSelectedPrice(null)}
                                        />
                                        <span className="text-gray-600 group-hover:text-indigo-600 transition">All Prices</span>
                                    </label>
                                    {priceRanges.map(range => (
                                        <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                                            <input 
                                                type="radio" 
                                                name="price"
                                                className="w-5 h-5 accent-indigo-600"
                                                checked={selectedPrice?.label === range.label}
                                                onChange={() => setSelectedPrice(range)}
                                            />
                                            <span className="text-gray-600 group-hover:text-indigo-600 transition">{range.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Hotels List */}
                <main className="lg:w-3/4 pb-20">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Found {filteredHotels.length} Hotels</h2>
                        <button className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition">Sort by: Featured</button>
                    </div>

                    <div className="space-y-6">
                        {filteredHotels.map(hotel => (
                            <div key={hotel.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all duration-300 group">
                                {/* Image */}
                                <div className="md:w-72 h-64 md:h-auto overflow-hidden relative">
                                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm border border-orange-100 flex items-center gap-1">
                                        <span className="text-orange-500 text-lg">★</span> {hotel.stars}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition mb-1">{hotel.name}</h3>
                                            <a href={hotel.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-indigo-500 flex items-center gap-1 mt-1 transition underline-offset-4 hover:underline">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                {hotel.location}
                                            </a>
                                        </div>
                                        <div className="text-right flex flex-col items-end">
                                            <span className="text-3xl font-bold text-indigo-600">${hotel.price}</span>
                                            <span className="text-gray-400 text-xs">per night</span>
                                        </div>
                                    </div>

                                    {/* Features Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {hotel.features.map(f => (
                                            <span key={f} className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{f}</span>
                                        ))}
                                        <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{hotel.type}</span>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                        <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            Free Cancellation
                                        </p>
                                        <Link 
                                            to={`/rooms/${hotel.id}`} 
                                            className="bg-[#e58c0f] hover:bg-[#e98503] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md shadow-orange-100 hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredHotels.length === 0 && (
                            <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-400 mb-2">No hotels found matching your filters.</h3>
                                <button onClick={() => {setSelectedPrice(null); setSelectedRoom([]); setHasPool(false)}} className="text-indigo-600 font-semibold underline underline-offset-4">Reset All Filters</button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AllHotels