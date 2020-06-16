import React from 'react';
import './App.css';

//Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

//Components
import Navbar from "./components/navbar";

import {Route, Switch} from "react-router-dom";


function App() {
  return <>
   <Navbar></Navbar>
   <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
      
  </>
}

export default App;
