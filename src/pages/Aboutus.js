import React from "react";

const Aboutus = () => {

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
                            <h1 className="main-heading">About Us</h1>
                            <p className="mini-title">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button type="button" className="btn btn-style mx-3">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>


            </section>


        </>
    );
};

export default Aboutus;
