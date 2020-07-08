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
        loading: true,
        type: 'all',
        capacity: 1,
        price: 400, 
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };

    componentDidMount(){
        let rooms = this.formatData(items)
        let sortedRooms = this.formatData(this.sortedRooms(items,{price: 200, pets: true, capacity: 2, size: 500, breakfast: true, type:"double"}))
        let featuredRooms = rooms.filter(rooms=>rooms.featured==true);
        let maxPrice = Math.max(...rooms.map(item=>item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: sortedRooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            size: maxSize,
            maxSize: maxSize
        })
        console.log(sortedRooms)
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

    sortedRooms(items, params) {
        const {price, pets, capacity, size, breakfast, type} = params;
        let tempSortedRooms = items.filter(items => {return items.fields.price <= price && items.fields.pets === pets && items.fields.capacity <= capacity && items.fields.size <= size && items.fields.breakfast === breakfast && items.fields.type === type} );
        return tempSortedRooms
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

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext}