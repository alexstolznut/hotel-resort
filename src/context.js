import React, { Component } from 'react'
import items from './data';
const RoomContext = React.createContext();
//
console.log(typeof items)
class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms:[],
        loading: true
    };

    componentDidMount(){
        let rooms = this.formatData(items)
        console.log(typeof rooms)
    }


    formatData(items) {
        let tempItems = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(images=>images.fields.file.url);
            let rooms = {...item.fields, images, id};
            return rooms;
        });
        return tempItems;

    }

    
    
    render() {
        return (
            <RoomContext.Provider value={items}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}