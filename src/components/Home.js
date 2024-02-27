import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SlideShow from "./Slideshow";
import Cards from './Cards'
import '../css/App.css';
import logo from '../images/logo.png';


import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <img src={logo} className="bi me-2 text-white" width="50" height="50" alt="logo" />
      home
    </div>
  )
}
export default Home;