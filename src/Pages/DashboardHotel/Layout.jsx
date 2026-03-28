import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import logo from '../../assets/logo.png'

const Layout = ({ children }) => {
    const { user } = useUser()
    const location = useLocation()

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard-hotel', icon: '📊' },
        { name: 'Add Hotel', path: '/dashboard-hotel/add', icon: '🏨' },
        { name: 'Hotels List', path: '/dashboard-hotel/list', icon: '📋' },
    ]

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-gray-200 p-8 flex flex-col fixed h-full z-50">
                <div className="mb-12">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-32 w-28 object-contain" />
                    </Link>
                </div>

                <nav className="space-y-4 flex-grow">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                                location.pathname === link.path 
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105' 
                                : 'text-gray-500 hover:bg-gray-50 hover:text-indigo-600'
                            }`}
                        >
                            <span className="text-xl">{link.icon}</span>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="pt-8 border-t border-gray-100">
                    <Link to="/" className="flex items-center gap-3 text-red-500 font-bold hover:underline">
                        <span>🚪</span>
                        Exit Admin
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow ml-80 min-h-screen">
                {/* Header */}
                <header className="bg-white border-b border-gray-100 px-12 py-6 flex items-center justify-between sticky top-0 z-40">
                    <h2 className="text-xl font-bold text-gray-900 capitalize">
                        {location.pathname.split('/').pop().replace('-', ' ') || 'Admin Dashboard'}
                    </h2>
                    
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-gray-900">{user?.fullName}</p>
                            <p className="text-xs text-gray-400">System Administrator</p>
                        </div>
                        <img src={user?.imageUrl} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-indigo-50 shadow-sm" />
                    </div>
                </header>

                <div className="p-12">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
