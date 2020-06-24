import React from 'react'


export default function Rooms({id, rooms}) {
    console.log({id})
    return (
        <div key={id}>
            Hello
           {rooms.name}
          
        </div>
    )
}
