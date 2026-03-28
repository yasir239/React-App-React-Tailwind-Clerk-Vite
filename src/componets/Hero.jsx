import React from 'react'
import hotel1 from '../assets/hotel1.png'

const Hero = () => {
    return (
        <div
            className='flex flex-col items-center justify-center text-center px-4 bg-no-repeat bg-cover bg-center min-h-[calc(100vh-80px)]'
            style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${hotel1}")` }}
        >
            <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg mb-4">
                Find Your Next Stay
            </h1>
            <p className="text-sm sm:text-lg text-white font-medium mb-12 drop-shadow-md">Search for deals on hotels, homes, and much more...</p>

            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="search-inputs-container">
                    <div className="search-group">
                        <label className="search-label">Destination</label>
                        <input list="cities" type="text" placeholder="Where are you going?" className="search-input" />
                        <datalist id="cities">
                            <option value="Riyadh" />
                            <option value="New York" />
                            <option value="Oslo" />
                            <option value="London" />
                            <option value="Texas" />
                        </datalist>
                    </div>

                    <div className="search-group">
                        <label className="search-label">Check in</label>
                        <input type="date" className="search-input" />
                    </div>

                    <div className="search-group">
                        <label className="search-label">Check out</label>
                        <input type="date" className="search-input" />
                    </div>

                    <div className="search-group">
                        <label className="search-label">Guests</label>
                        <input type="number" min="1" placeholder="1 Guest" className="search-input" />
                    </div>

                    <div className="search-group">
                        <label className="search-label">Rooms</label>
                        <input type="number" min="1" placeholder="1 Room" className="search-input" />
                    </div>
                </div>

                <button type="submit" className="btn-search">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Hero