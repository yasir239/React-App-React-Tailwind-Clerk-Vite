import React, { useState, useEffect } from 'react'
import { hotelsData } from '../../assets/hotelsData'

const HotelsList = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('myHotels')) || []
        setHotels([...stored, ...hotelsData])
    }, [])

    const handleDelete = (id) => {
        const updated = hotels.filter(h => h.id !== id)
        setHotels(updated)
        // Only save to localStorage the ones that were there
        const stored = JSON.parse(localStorage.getItem('myHotels')) || []
        const updatedStored = stored.filter(h => h.id !== id)
        localStorage.setItem('myHotels', JSON.stringify(updatedStored))
    }

    return (
        <div className="space-y-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Hotel Inventory</h1>
            
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest">Hotel Info</th>
                            <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest">Type</th>
                            <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest">Price</th>
                            <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest text-right whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {hotels.map((hotel) => (
                            <tr key={hotel.id} className="hover:bg-gray-50 transition group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-6">
                                        <img src={hotel.image} alt={hotel.name} className="w-20 h-14 object-cover rounded-xl shadow-sm group-hover:scale-105 transition" />
                                        <div>
                                            <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition">{hotel.name}</p>
                                            <p className="text-gray-400 text-xs">{hotel.location}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6 font-semibold text-gray-600">{hotel.type || 'Custom'}</td>
                                <td className="px-8 py-6">
                                    <span className="text-xl font-bold text-indigo-600">${hotel.price}</span>
                                    <span className="text-xs text-gray-400 ml-1">/night</span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-4">
                                        <button className="text-blue-500 hover:underline font-bold text-sm cursor-pointer">Edit</button>
                                        <button 
                                            onClick={() => handleDelete(hotel.id)}
                                            className="text-red-500 hover:underline font-bold text-sm cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {hotels.length === 0 && (
                    <div className="p-20 text-center border-2 border-dashed border-gray-100 m-8 rounded-3xl font-bold text-gray-400">
                        🏨 No hotels currently in inventory.
                    </div>
                )}
            </div>
        </div>
    )
}

export default HotelsList
