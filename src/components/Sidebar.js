import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FarIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { SidebarData } from './SidebarData';
import '../css/Sidebar.css'
import '../css/App.css'
import logo from '../images/logo.png';



function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FarIcons.FaBars onClick={showSidebar} />
                </Link>
            </div >
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                        
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <>
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            </>
                        );
                    })
                    }
                    <div className='nav-bar-logo'>
                            <img src={logo} className="App-logo nav-bar-logo" alt="logo"/>
                            <div className="text-overlay">
                                <h3>আমরা আমরা</h3>
                            </div>
                        </div>
                </ul>
                
            </nav>
            </IconContext.Provider>
        </>
    )
}
export default Sidebar;