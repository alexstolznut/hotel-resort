import React, { Component } from 'react'
import Client from './contentful'
const RoomContext = React.createContext();


 
//

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
        size: 1000,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };

    getData = async () =>{

        try {
            let response = await Client.getEntries({
                content_type: 'hotelRooms',
                order: 'sys.createdAt'
            });
            let rooms = this.formatData(response.items)
            let featuredRooms = rooms.filter(rooms=>rooms.featured==true);
        let maxPrice = Math.max(...rooms.map(item=>item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            size: maxSize,
            maxSize: maxSize
        })

        } catch (error) {
            console.log(error)
        }
    //     let rooms;
    //     Client.getEntries({
    //         content_type: "hotelRooms"
    //     }).then(response => rooms = this.formatData(response.items)).then(reponse=>{
    //     // let sortedRooms = this.formatData(this.sortedRooms())
    //     let featuredRooms = rooms.filter(rooms=>rooms.featured==true);
    //     let maxPrice = Math.max(...rooms.map(item=>item.price));
    //     let maxSize = Math.max(...rooms.map(item=>item.size));
    //     this.setState({
    //         rooms,
    //         featuredRooms,
    //         sortedRooms: rooms,
    //         loading: false,
    //         price: maxPrice,
    //         maxPrice: maxPrice,
    //         size: maxSize,
    //         maxSize: maxSize
    //     })
    //     // console.log(sortedRooms)
    //     console.log(featuredRooms)
    // });
    }


    componentDidMount(){
       this.getData();
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

    sortedRooms() {
        let {price, pets, capacity, size, breakfast, type, minSize, maxSize} = this.state;
        let tempRooms = [...this.state.rooms]
        capacity = parseInt(capacity);
        console.log(minSize);
        price = parseInt(price);
        minSize = parseInt(minSize);
        maxSize = parseInt(maxSize);

        if(minSize = "NaN"){
            minSize = 0
        }
       
        // if(minSize === "" || minSize === NaN || minSize === null || minSize < 0) {
        //     minSize = 0;
        //     console.log(minSize)
        // }
        if( type != 'all') {
            tempRooms = tempRooms.filter(items => items.type === type && items.price <= price && items.capacity >= capacity && items.size >= minSize && items.size <= maxSize);
        } else {
            tempRooms = tempRooms.filter(items =>  items.price <= price &&  items.capacity >= capacity && items.size <= maxSize && items.size >= minSize);
        }
        if (breakfast){
            tempRooms = tempRooms.filter(item => item.breakfast === true)
        }

        if (pets){
            tempRooms = tempRooms.filter(item => item.pets === true)
        }
        tempRooms.map(items=> parseInt(items.capacity))
        this.setState({
            sortedRooms: tempRooms
        })
        
        
    }

    

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug===slug);
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const name = event.target.name;
        const value =  target.type === 'checkbox' ? target.checked : event.target.value;
        console.log(target.checked);
        this.setState({
            [name]: value 
        }, this.sortedRooms);
    }
    
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange: this.handleChange}}>
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