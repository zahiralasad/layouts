import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Main() {
    return (
        // <div>
        //     {page === 'home' ? <Home /> : null}
        //     {page === 'batch98' ? <Batch98 /> : null}
        // </div>
        <div>
            <a href="sidebar0" className='btn btn-primary'>Sidebar 0</a>
            <a href="sidebar1" className='btn btn-primary'>Sidebar 1</a>
        </div>
    )
}
export default Main;