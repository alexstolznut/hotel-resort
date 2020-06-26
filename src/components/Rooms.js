import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import defaultImg from "../images/room-1.jpeg";
import { RoomContext } from '../context';


export default function Rooms({id, rooms}) {
    const {name, images, price, slug } = rooms;

    let defaultImage = `../images/room-${id}.jpeg`;
    return (
        <Link to={`/rooms/${slug}`} key={id} style={{textDecoration:"none", color:"#222"}}>
        <section key={id} className="room">
            <div className="" className="img-container">
                <span className="price-top"><h6>${price}</h6><p>per night</p></span>
                <img src={images[0] || defaultImg} style={{width:"100%", display:"block"}}/>
                <div className="btn-primary room-link">Featured</div>
            </div>
            <p className="room-info">{name}</p>
          
        </section>
        </Link>
    )
}

RoomContext.PropTypes = {
    rooms:PropTypes.shape({
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}
