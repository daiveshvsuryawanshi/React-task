import React, { useState } from "react";
import Storeapi from "../api/Storeapi.js";

const Store = () => {
    const [storeData, setstoredata] = useState(Storeapi);
    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        Our Popular Product
                    </h1>
                    <div className="row">
                        {storeData.map((curElem) => {
                            const { id, img, title, price } = curElem;
                            return (
                                <>
                                    <div
                                        className="col-11 col-lg-3 col-xxl-3 work-container-subdiv"
                                        key={id}>
                                        <img src={img} alt="images" className="img-fluid " />
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para">{price}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Store;
