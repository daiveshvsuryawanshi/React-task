import React, { useState } from "react";
import Aboutapi from "../api/Aboutapi";

const About = () => {
    const [aboutData, setAboutData] = useState(Aboutapi);
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./assets/img/image-1.jpeg" alt="aboutusIMg" />
                        </div>

                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                ABC Jewelry
                            </h3>
                            <h1 className="main-heading">Our Jwellary Type</h1>

                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <br />
                            <button type="button" className="btn btn-style">
                                Explore &#8594;
                            </button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default About;
