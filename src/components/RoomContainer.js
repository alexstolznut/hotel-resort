import React from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomsList from "./RoomsList"

export default function RoomContainer() {
    return (
        <div>
            Rooms Container
            <RoomsFilter></RoomsFilter>
            <RoomsList></RoomsList>
            
        </div>
    )
}
