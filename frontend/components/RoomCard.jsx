import React from 'react'

export default function RoomCard({roomName}) {
	return (
		<div className='px-8 py-6 border-2 text-white'>
			<h3>{roomName}</h3>
		</div>
	)
}
