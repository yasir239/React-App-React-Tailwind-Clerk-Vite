import React from 'react'

// Import assets
import user1 from '../assets/testimonial_1.jpg'
import user2 from '../assets/testimonial_2.png'
import user3 from '../assets/testimonial_3.jpg'

const testimonialData = [
    {
        id: 1,
        name: "Yasser Al-Amri",
        location: "Riyadh, Saudi Arabia",
        rating: 5,
        review: "The booking process was incredibly smooth. I found the perfect hotel in Oslo within minutes and the support was excellent!",
        image: user1
    },
    {
        id: 2,
        name: "Sarah Johnson",
        location: "London, United Kingdom",
        rating: 4,
        review: "Great selection of luxury stays. The offers section helped me save a lot on my family vacation to the Maldives. Highly recommended!",
        image: user2
    },
    {
        id: 3,
        name: "Erik Nordmann",
        location: "Oslo, Norway",
        rating: 5,
        review: "Premium experience from start to finish. The dashboard makes it so easy to manage all my hotel bookings in one place.",
        image: user3
    }
]

const Testimonials = () => {
    return (
        <section className="bg-indigo-50 py-24">
            <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Real stories from real travelers who have experienced the world with us.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData.map((testi) => (
                        <div key={testi.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100 flex flex-col">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <span key={i} className="text-[#e58c0f] text-lg">★</span>
                                ))}
                                {[...Array(5 - testi.rating)].map((_, i) => (
                                    <span key={i} className="text-gray-300 text-lg">★</span>
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow">
                                "{testi.review}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-100 p-0.5">
                                    <img src={testi.image} alt={testi.name} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 leading-tight">{testi.name}</h4>
                                    <p className="text-xs text-gray-400">{testi.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
