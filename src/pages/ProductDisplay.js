import React,{ useEffect}  from "react";
import {  useParams } from "react-router-dom"
import './../index.css'
import Productapi from "../api/Productapi";

function ProductDisplay() {
    const { id } = useParams()
    // const { path } = useRouteMatch()
    useEffect(() => {
        document.title = "Product Details";  
      }, []); 

    return (
        <>
             <div
                className="col-11 col-md-6 col-lg-8 col-xxl-8 work-container-subdiv text-center mx-auto my-5"
                key={id}>
                  <img src={Productapi[id - 1].img} alt="images" className="img-fluid img-product" /> {" "}
                <h4 className="sub-heading fw-bolder">{Productapi[id - 1].title}</h4> {" "}
                <p className="main-hero-para fw-bold">{Productapi[id -1].price}</p> {" "}
                <p className="main-hero-para fw-bold">{Productapi[id -1].desc}</p> {" "}
            </div> 

        </>
        // <h1>{ProductsData[id - 1].name}</h1>{" "}
    );
}

export default ProductDisplay;
export { ProductDisplay }
//     <p>{ProductsData[id - 1].description}</p>{" "}