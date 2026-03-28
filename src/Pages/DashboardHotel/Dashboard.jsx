import React from 'react'

const Dashboard = () => {
    const stats = [
        { label: 'Total Hotels', value: '45', icon: '🏨', color: 'bg-indigo-500' },
        { label: 'Total Bookings', value: '1,280', icon: '📈', color: 'bg-green-500' },
        { label: 'Active Users', value: '820', icon: '👤', color: 'bg-orange-500' },
        { label: 'Monthly Revenue', value: '$45,800', icon: '💰', color: 'bg-purple-500' },
    ]

    return (
        <div className="space-y-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">System Overview</h1>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition hover:shadow-xl hover:scale-105 duration-300 group">
                        <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center text-3xl mb-4 text-white shadow-lg group-hover:rotate-12 transition`}>
                            {stat.icon}
                        </div>
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                        <h3 className="text-3xl font-extrabold text-gray-900">{stat.value}</h3>
                    </div>
                ))}
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-96">
                <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center animate-pulse mb-6">📉</div>
                <h3 className="text-xl font-bold text-gray-400">Activity Report (Monthly View)</h3>
                <p className="text-gray-500 text-sm mt-2">Data visualization module initializing...</p>
            </div>
        </div>
    )
}

export default Dashboard
