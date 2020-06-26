import React, { Component } from 'react'
import {RoomContext} from "../context"
import data from "../data";
import LoadingComp from "./Loading";
import Title from "./Title";
import {Link} from "react-router-dom";
import Rooms from "./Rooms"

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
        let {rooms, featuredRooms, sortedRooms, loading} = this.context;

        rooms = featuredRooms.map(item => {
        
            return <Rooms id={item.id} rooms={item}/>
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
