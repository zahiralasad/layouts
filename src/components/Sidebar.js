import React from 'react';
import { Link } from 'react-router-dom';
import * as FarIcons from "react-icons/fa";


function Sidebar(){
    return (
        <div className="Sidebar">
            <Link to='#' className=''>
                <FarIcons.FaBars/>
            </Link>

          <h3>Sidebar</h3>
        </div >
    )
}
export default Sidebar;