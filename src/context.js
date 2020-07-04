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
        let featuredRooms = rooms.filter(rooms=>rooms.featured==true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading: false
        })
        console.log(featuredRooms)
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

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug===slug);
        return room;
    }
    
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}