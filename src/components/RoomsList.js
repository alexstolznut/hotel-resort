import React from 'react'
import Room from './Rooms';

export default function RoomsList({rooms}) {
    console.log(rooms)
    return (
        <section className="roomslist">
        {rooms.length === 0 ? 
        <div className="empty-search">
            <h3>Unfortunately no rooms matched your seatch parameters</h3>
        </div> 
        : 
        <div className="roomslist-center">
            {rooms.map(item =>{
                return <Room rooms={item} key={item.id}></Room>
            })}
        </div>}
        </section>
    )
}
