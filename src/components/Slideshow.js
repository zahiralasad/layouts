import React from "react";
import logo from '../images/ssbcAd01.jpeg';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-bootstrap';

function SlideShow() {
  return (
    <div className="">
        <Carousel variant="dark">
            <Carousel.Item>
                <div className="mt-2 p-4 p-md-5 mb-4 rounded text-bg-dark">
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="mt-2 p-4 p-md-5 mb-4 rounded text-bg-dark">
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="mt-2 p-4 p-md-5 mb-4 rounded text-bg-dark">
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SlideShow;