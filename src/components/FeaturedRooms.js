import React, { Component } from 'react'
import {RoomContext} from "../context"
import data from "../data";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const value = this.context;
        console.log(typeof data)

        const valueArray = Object.keys(value);
        console.log(valueArray);
  
        return (
            <div className="featured-rooms-center">
              {value.map((item, key) => {
               return <div style={{backgroundColor:"grey", borderRadius:"0 0 4px 4px"}}>
                  <div className="featured-rooms" 
                        key={key} 
                        style={{backgroundImage: `url(${item.fields.images[0].fields.file.url})`, backgroundSize:'cover'}}>
                    
                        </div>
                        <h6> {item.fields.name}</h6>
                    </div>
                 })}
            </div>
        )
    }
}
