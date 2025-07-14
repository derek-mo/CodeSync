import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen' >
        <div className="border-2 p-6 space-y-4 md:space-y-6">
            <span>Login</span>
            <div className='flex flex-col' >
                <label>Username</label>
                <input input type="email" name="email" id="email" required className="border-2" />
                <label>Password</label>
                <input input type="password" name="password" id="password" required className="border-2" />
            </div>
        </div>
    </div>
  )
}
