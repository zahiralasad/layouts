
import React from 'react';

function PicnicRegistrationForm() {
    return (
        <div className='p-3 col-sm-10 col-auto text-white'>
            <div class="card border border-dark bg-dark" style={{ borderRadius: "7px" }}>
                <form>
                    
                    <div class="row">
                        <div class="col">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 ">বনভোজন ২০২৩ নিবন্ধন ফর্ম</p>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                        </div>
                        {/* <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                class="img-fluid" alt="Sample image" />

                        </div> */}
                    </div>
                </form>
            </div>
        </div>
    );

}
export default PicnicRegistrationForm;