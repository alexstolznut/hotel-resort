import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {

    state = {
        isOpen: false
    }


    handleToggle = () => {
        console.log(this.state.isOpen);
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {

        const closedStyle = {
            height: 0,
            overflow: "hidden"
        };

        const openStyle = {
            height: "auto",
            overflow:"visible"
        }
        return <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/"><img src={logo} alt="Beach resort"></img> <p>{this.state.isOpen}</p></Link>
                        <button className="nav-btn" onClick = {this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"  }>
                        <li>
                        <Link to="/">Home</Link>
                        
                        </li>
                        <li>
                        <Link to="/Rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    }
}
