import React, { useState } from 'react'
import hotel1 from '../../assets/hotel1.jpg'

const AddHotel = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(hotel1)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newHotel = {
            id: Date.now(),
            name,
            price: Number(price),
            location,
            image: preview,
            stars: 5,
            features: ["Wifi", "Pool"]
        }
        
        // Save to localStorage for now
        const existing = JSON.parse(localStorage.getItem('myHotels')) || []
        localStorage.setItem('myHotels', JSON.stringify([newHotel, ...existing]))
        
        alert('Hotel added successfully!')
        setName('')
        setPrice('')
        setLocation('')
    }

    return (
        <div className="max-w-x-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Hotel</h1>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Form */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Hotel Name</label>
                            <input 
                                required
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                placeholder="Enter hotel name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Location</label>
                            <input 
                                required
                                type="text" 
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                placeholder="City, Country"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Price per Night ($)</label>
                            <input 
                                required
                                type="number" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                placeholder="e.g. 250"
                            />
                        </div>
                    </div>

                    {/* Right Side: Image Upload */}
                    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-3xl hover:border-indigo-400 transition-all group overflow-hidden bg-gray-50">
                        <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-2xl mb-4 shadow-md group-hover:scale-105 transition duration-500" />
                        <label className="bg-white border border-gray-200 px-6 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 cursor-pointer shadow-sm">
                            Choose Photo
                            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                        </label>
                        <p className="text-[10px] text-gray-400 mt-2">Recommended: 1200 x 800px</p>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-50 flex justify-end">
                    <button type="submit" className="bg-[#e58c0f] hover:bg-orange-600 text-white px-10 py-3 rounded-2xl font-bold shadow-lg shadow-orange-100 transition transform active:scale-95 cursor-pointer">
                        Save Hotel Property
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddHotel
