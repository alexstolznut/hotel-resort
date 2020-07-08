import React from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomsList from "./RoomsList"
import {withRoomConsumer, RoomContext} from "../context";
import Loading from "../components/Loading";

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    console.log(sortedRooms)
    return (
            <div>
                {loading ? 
                <Loading></Loading> : 
                <><RoomsFilter rooms={rooms}></RoomsFilter>
                <RoomsList rooms={sortedRooms}></RoomsList></>}

            </div>
    )

}

export default withRoomConsumer(RoomContainer)





// import React from 'react'
// import RoomsFilter from "./RoomsFilter"
// import RoomsList from "./RoomsList"
// import {RoomConsumer, RoomContext} from "../context";
// import Loading from "../components/Loading";

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const  {loading, sortedRooms, rooms} = value
//                     return (
//                         <div>
//                             Rooms Container
//                             {loading ? 
//                             <Loading></Loading> : 
//                             <><RoomsFilter rooms={rooms}></RoomsFilter>
//                             <RoomsList rooms={sortedRooms}></RoomsList></>}
            
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
