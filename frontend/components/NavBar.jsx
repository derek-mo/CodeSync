import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-black text-white px-6 py-3">
        <div className="flex justify-between items-center">
            <div className="text-lg font-bold">CodeSync</div>
            <div className='flex space-x-6'>
                <a href="/dashboard" className="hover:text-gray-400">Dashboard</a>
                <a href="/account" className="hover:text-gray-400">Account</a>
            </div>
        </div>
    </nav>
  )
}
