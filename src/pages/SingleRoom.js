import React, { useContext } from 'react'
import {RoomContext} from '../context';
import {useParams} from "react-router-dom";
import SingleRoomComp from "../components/SingleRoom"


export default function SingleRoom() {
    let slug = useParams().slug;
    const {rooms} = useContext(RoomContext)
    console.log(rooms.find(rooms=>rooms.slug===slug))
    // let SingleRooms = rooms.find(rooms=>rooms.slug===slug)
    let SingleRoom = rooms.map(SingleRoom=>{
        if(SingleRoom.slug.match(slug)) return <SingleRoomComp room={SingleRoom}></SingleRoomComp>
    })
    return (
        <div>
            {SingleRoom}
        </div>
    )
}
