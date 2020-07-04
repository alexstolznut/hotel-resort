import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import {Link} from "react-router-dom";

export default function home() {
    return (
        <>
               <Hero hero="defaultHero">
                 <Banner title="luxious rooms" subtitle="delux rooms starting at $299">
                     <Link to="/rooms/"><button className="btn-primary">Our Roooms</button></Link>
                 </Banner>
               </Hero>
               <Services>
                   
               </Services>
               <FeaturedRooms></FeaturedRooms>
             
        </>
    )
}
