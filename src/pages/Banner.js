import React from "react";

const Banner = () => {
    return (
        <>

            <div class="container-fluid  mx-auto w-100 py-5 text-center">
                <div class="jumbotron  jumbotron-image shadow bg-image py-5">
                    <div class="col-8 mx-auto">
                        <div class="row">
                            <div class="col-md-4 col-xl-4 col-lg-4 col-xxl-4">
                                <img src="./assets/img/image-1.jpeg" alt="" />
                            </div>

                            <div class="col-md-8 col-xl-8 col-lg-8 col-xxl-8 my-auto">
                                <h2 class="mb-4 banner-title">
                                    10% Off 
                                </h2>
                                
                                <p class="mb-4 lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                </p>

                                <button type="button" className="btn btn-style">
                                Explore &#8594;
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner;