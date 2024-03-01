import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'



function Sidebar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
                    <a className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline">
                        <span>Side Menu</span>
                    </a>
                    <div class="dropdown open">
                        <a
                            class="btn  dropdown-toggle text-white"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <li className="bi bi-person fs-4"></li><span className="fs-4 ms-3">Home</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item disabled" href="#">Disabled action</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;