import React from 'react'

export default function SingleRoom({room}) {
    console.log(room)
    return (
        <div className="single-room">
            <div className="single-room-images">
                {room.images.map(images =>{
                   return <img src={images} alt="" key={images.indexOf({images})}></img>
                })}
            </div>
            <div className="room-info"></div>
            <div className="room-extras">
                <h3>Extras</h3>
                <ul>
                    {room.extras.map(extras=>{
                        return <li className="extras">{extras}</li>
                    })}
                </ul>
            </div>
            <div className="desc">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
            </div>

        </div>
    )
}
