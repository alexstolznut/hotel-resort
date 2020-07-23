import React, { Component } from 'react'

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from "./Title";


export default class Services extends Component {
    state = {
        services: [
           {
               icons: <FaCocktail/>,
               title: "Free cocktails",
               info: "djbjkbjkdnfjdnjdsnjsd jdnkjdnfkjdsnfkjds kjdnfdkjsnfdjksf kjdnjkdnk jkdsnfkjdsn"
           },
           {
            icons: <FaHiking/>,
            title: "Lovely Hiking",
            info: "djbjkbjkdnfjdnjdsnjsd jdnkjdnfkjdsnfkjds kjdnfdkjsnfdjksf kjdnjkdnk jkdsnfkjdsn"
        },
        {
            icons: <FaShuttleVan/>,
            title: "Free Shuttles",
            info: "djbjkbjkdnfjdnjdsnjsd jdnkjdnfkjdsnfkjds kjdnfdkjsnfdjksf kjdnjkdnk jkdsnfkjdsn"
        },
        {
            icons: <FaBeer/>,
            title: "Free cocktails",
            info: "djbjkbjkdnfjdnjdsnjsd jdnkjdnfkjdsnfkjds kjdnfdkjsnfdjksf kjdnjkdnk jkdsnfkjdsn"
        }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((services, index) => {
                      return  <article key={index} className="service">
                               <span>{services.icons}</span>
                               <h6>{services.title}</h6>
                               <p>{services.info}</p>
                              </article>
                    })}
                    
                </div>
                
                
            </section>
        )
    }
}

