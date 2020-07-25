import React, { Component } from 'react'
import {RoomContext} from "../context"
import LoadingComp from "./Loading";
import Title from "./Title";
import Rooms from "./Rooms"

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
        let {rooms, featuredRooms, loading} = this.context;

        rooms = featuredRooms.map((item, index) => {
        
            return <Rooms key={index} id={index} rooms={item}/>
        })

        
        
        return (
            
            <section className="featured-rooms">
                <Title title="featured rooms"></Title>
                <div className="featured-rooms-center">
                {loading ? <LoadingComp/> : rooms}
                </div>    
            </section>
        )
    }
}
