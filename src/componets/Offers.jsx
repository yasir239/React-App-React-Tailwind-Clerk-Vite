import React from 'react'

// Import assets
import offer1 from '../assets/offer_1.jpg'
import offer2 from '../assets/offer_2.jpg'
import offer3 from '../assets/offer_3.jpg'
import offer4 from '../assets/offer_4.jpg'

const offersData = [
    {
        id: 1,
        title: "Limited-Time Summer Escape",
        description: "Save up to 30% on luxury beachfront resorts for your summer getaway.",
        image: offer1,
        tag: "Hot Deal"
    },
    {
        id: 2,
        title: "Romantic Dinner Packages",
        description: "Exclusive fine dining experiences included with your weekend city stay.",
        image: offer2,
        tag: "Special"
    },
    {
        id: 3,
        title: "Family Adventure Discount",
        description: "Book 3 nights or more and get free theme park tickets for the whole family.",
        image: offer3,
        tag: "Family"
    },
    {
        id: 4,
        title: "Spa & Wellness Retreat",
        description: "Pamper yourself with a complimentary spa treatment during your mountain retreat.",
        image: offer4,
        tag: "Wellness"
    }
]

const Offers = () => {
    return (
        <section className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 pb-20 pt-10">
            <div className="flex flex-col mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Special Offers</h2>
                <p className="text-gray-500">Discover handpicked deals and exclusive experiences just for you.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {offersData.map((offer) => (
                    <div key={offer.id} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row h-full border border-white">
                        {/* Image Side */}
                        <div className="sm:w-1/2 relative h-64 sm:h-auto overflow-hidden">
                            <img 
                                src={offer.image} 
                                alt={offer.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase">
                                {offer.tag}
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="sm:w-1/2 p-6 flex flex-col justify-center bg-white">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                {offer.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {offer.description}
                            </p>
                            <button className="self-start text-[#e58c0f] font-bold border-2 border-[#e58c0f] hover:bg-[#e58c0f] hover:text-white px-6 py-2 rounded-full transition-all duration-300 cursor-pointer">
                                View Offer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Offers