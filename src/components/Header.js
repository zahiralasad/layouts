import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';
import logo from '../images/logo.png';


// import { Link } from "react-router-dom";

function Header() {
  return (
    <div >
      <img src={logo} className="bi me-2 text-white" width="50" height="50" alt="logo" />
    </div>
  )
}
export default Header;