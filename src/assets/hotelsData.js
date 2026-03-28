import room1 from './allrooms_1.jpg'
import room2 from './allrooms_2.jpg'
import room3 from './allrooms_3.jpg'
import room4 from './allrooms_4.jpg'
import room5 from './allrooms_5.jpg'
import hotel1 from './hotel1.jpg'
import hotel2 from './hotel_2.jpg'
import hotel3 from './hotel_3.jpg'
import hotel4 from './hotel_4.jpg'
import hotel5 from './hotel_5.jpg'

export const hotelsData = [
    {
        id: 1,
        name: "Azure Bay Resort",
        image: room1,
        stars: 5,
        location: "Maldives, North Atoll",
        mapUrl: "https://www.google.com/maps",
        features: ["Wifi", "Sea View", "Pool"],
        type: "Family Suite",
        price: 450,
        availability: "Available",
        description: "Experience luxury at its finest in our Azure Bay Resort. Nestled in the North Atoll of Maldives, this resort offers breathtaking sea views and world-class amenities."
    },
    {
        id: 2,
        name: "Skyline Central Hotel",
        image: room2,
        stars: 4,
        location: "New York, Times Square",
        mapUrl: "https://www.google.com/maps",
        features: ["Wifi", "Pool"],
        type: "Double Room",
        price: 280,
        availability: "Limited",
        description: "Stay in the heart of the city that never sleeps. Our Skyline Central Hotel offers modern comfort and easy access to all New York attractions."
    },
    {
        id: 3,
        name: "Oslo Grand Suite",
        image: room3,
        stars: 5,
        location: "Oslo, City Center",
        mapUrl: "https://www.google.com/maps",
        features: ["Wifi", "Sea View"],
        type: "Single Room",
        price: 45,
        availability: "Available",
        description: "A cozy and elegant single room in the heart of Oslo. Perfect for business travelers or solo explorers looking for a premium stay."
    },
    {
        id: 4,
        name: "London Bridge Inn",
        image: room4,
        stars: 4,
        location: "London, Southwark",
        mapUrl: "https://www.google.com/maps",
        features: ["Wifi", "Sea View", "Pool"],
        type: "Double Room",
        price: 1200,
        availability: "Booked Out",
        description: "Classic British style meets modern luxury. The London Bridge Inn provides stunning views of the Thames and top-tier service."
    },
    {
        id: 5,
        name: "Majestic Sands Villa",
        image: room5,
        stars: 5,
        location: "Texas, Gulf Coast",
        mapUrl: "https://www.google.com/maps",
        features: ["Wifi", "Sea View", "Pool"],
        type: "Family Suite",
        price: 3500,
        availability: "Available",
        description: "A private oasis on the Texas coast. This villa is perfect for large families seeking a secluded and luxurious beach vacation."
    }
]

export const homeHotels = [
    { id: 101, name: "Sunset Royal Palace", location: "Maldives, Island Resort", price: 450, rating: "4.9", image: hotel1, type: "Family Suite", features: ["Wifi", "Sea View", "Pool"], availability: "Available", stars: 5 },
    { id: 102, name: "City Light Suite", location: "New York, USA", price: 320, rating: "4.7", image: hotel2, type: "Double Room", features: ["Wifi", "Pool"], availability: "Limited", stars: 4 },
    { id: 103, name: "Mountain View Lodge", location: "Aspen, USA", price: 290, rating: "4.8", image: hotel3, type: "Single Room", features: ["Wifi"], availability: "Available", stars: 4 },
    { id: 104, name: "Urban Oasis Hotel", location: "London, UK", price: 380, rating: "4.6", image: hotel4, type: "Double Room", features: ["Wifi", "Spa"], availability: "Available", stars: 4 },
    { id: 105, name: "Nordic Lake Resort", location: "Oslo, Norway", price: 270, rating: "4.9", image: hotel5, type: "Single Room", features: ["Wifi", "Sea View"], availability: "Available", stars: 5 },
]
