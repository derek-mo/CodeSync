import React from 'react'
import Link from 'next/link'

export default function RoomCard({ room }) {
	return (
    <Link href={`/room/${room.room_id}`}>
      <div className="px-2 py-4 border-2 border-neutral-600 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors cursor-pointer">
        <h3 className="text-lg font-semibold mb-2">{room.room_name}</h3>
        <p className="text-gray-400 text-sm">
          Created: {new Date(room.created_at).toLocaleDateString()}
        </p>
      </div>
    </Link>
	)
}
