import React, { Component } from 'react'
import defaultBackground from "../images/room-1.jpeg";
import Banner from "../components/Banner";

import {RoomContext} from '../context';
import {Link} from "react-router-dom";
import StyledHero from "../components/StyledHero"


// export default function SingleRoom() {
//     let slug = useParams().slug;
//     const {rooms} = useContext(RoomContext)
//     console.log(rooms.find(rooms=>rooms.slug===slug))
//     // let SingleRooms = rooms.find(rooms=>rooms.slug===slug)
//     let SingleRoom = rooms.map(SingleRoom=>{
//         if(SingleRoom.slug.match(slug)) return <SingleRoomComp room={SingleRoom}></SingleRoomComp>
//     })
//     return (
//         <div>
//             {SingleRoom}
//         </div>
//     )
// }


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBackground: {defaultBackground}
        }
        
    }


    static contextType = RoomContext;
    render() {

        const {getRoom} = this.context;

        const room = getRoom(this.state.slug)
        
        console.log({room});

       
       if(!room){
           return <div className="error">
               <h3>No such room</h3>
           <Link to="/rooms" className="btn-primary">
               Back to rooms
           </Link>
           </div>
           
       }

       const {name, description, capacity, breakfast, size, price, extras,
    pets, images} = room
    console.log({room})
    const [mainImage, ...defaultImages] = images
        return (
            <div>
               
                <StyledHero img={mainImage || this.state.defaultBackground}> 
                <Banner title={`${name} room`}>
                     <Link to="/rooms/"><button className="btn-primary">Back to rooms</button></Link>
                 </Banner>
                </StyledHero>
                <section className="single-room">
            <div className="single-room-images">
                {defaultImages.map((images,index) =>{
                   return <img src={images} alt={name} key={index}></img>
                })}
            </div>
            <div className="single-room-info">
            <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
            </article>
            <article className="info">
                <h3>Info</h3>
                <h6>price : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                <h6>Max Capacity : {capacity>1? `${capacity} people` : `${capacity} person`}</h6>
                <h6>pets : {pets? "pets allowed" : "pets not allowed"} </h6>
                <h6>Breakfast : {breakfast ? "free breakfast" : "not included"} </h6>
            </article>
            </div>
        </section>
        <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((extras, index)=>{
                        return <li key={index}>- {extras}</li>
                    })}
                </ul>
            </section>
            </div>
        )
    }
}


