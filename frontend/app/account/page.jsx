import React from 'react'
import { logout } from './actions'

export default function Account() {
  return (
    <div>
        <form action={logout}>
            <button
                type="submit"
                className="w-40 text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
            >
                Logout
            </button>
        </form>
    </div>
  )
}
