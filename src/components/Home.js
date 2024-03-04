import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import App from "../App";
import { Link } from "react-router-dom";

function Home() {
  return (
    // <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between text-white">
    <div className="p-3 border-left col-sm-10 col-auto text-white">
      {/* <img src={logo} className="bi me-2 text-white" width="50" height="50" alt="logo" /> */}
      <div class="container">
        <div>Home</div>
        <a href="./contacts" class="nav-link text-white" aria-current="page">
          <span className="ms-2">Register to the Picnic 2024</span>
        </a>
      </div>
    </div>
  )
}
export default Home;