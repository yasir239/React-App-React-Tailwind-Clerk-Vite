import React from 'react'
import Hero from '../componets/Hero'
import Hotelcard from '../componets/Hotelcard'
import Offers from '../componets/Offers'
import Testimonials from '../componets/testimonials'

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero />
            <Hotelcard />
            <Offers />
            <Testimonials />
        </div>
    )
}

export default Home