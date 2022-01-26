import React from "react";
import { Productapi } from "./../api/Productapi";
import { useNavigate } from "react-router-dom";

const Listproduct = () => {
    const navigate = useNavigate();

    {
       {Productapi.map((Productapi) => {
            return (
                < div
                    className="col-11 col-md-6 col-lg-3 col-xxl-3 work-container-subdiv" onClick={() => {
                        navigate(`/Productapi/${Productapi.id}`);
                    }}>
                    <img src={Productapi.img} alt="images" className="img-fluid img-product" />
                    <h4 className="sub-heading fw-bolder">{Productapi.title}</h4>
                    <p className="main-hero-para fw-bold">{Productapi.price}</p>
                </div >
            );
        })}
    }
}

export default Listproduct;