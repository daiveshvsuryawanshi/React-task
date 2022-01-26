import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import './../index.css'
import { Productapi } from "../api/Productapi";

function ProductDisplay() {
  const { id } = useParams();
  // const { path } = useRouteMatch()
  useEffect(() => {
    document.title = "Product Details";
  }, []);

  return (
    <>
      <div
        className="container work-container-subdiv  mx-auto my-5  d-flex"
        key={id}>
        <div className="row py-5">
          <div className="col-12 col-lg-5 text-center our-service-leftside-img">
            <img src={Productapi[id - 1].img} alt="product" className="img-fluid img-product" />
          </div>

          {/* 1section right side data  */}
          <div className="col-12 col-lg-7 our-services-list">
            <h1 className="main-heading"> {Productapi[id - 1].title}</h1>
            <h3 className="main-hero-para fw-bold">
              {Productapi[id - 1].price}
            </h3>

            <p className="main-hero-para fw-bold">
              {Productapi[id - 1].desc}
            </p>
            <button type="button" className="btn btn-style px-3 float-end">
              Order Now
            </button>
          </div>
        </div>

        {/* <img src={Productapi[id - 1].img} alt="images" className="img-fluid img-product" /> {" "}
                <h4 className="sub-heading fw-bolder">{Productapi[id - 1].title}</h4> {" "}
                <p className="main-hero-para fw-bold">{Productapi[id -1].price}</p> {" "}
                <p className="main-hero-para fw-bold">{Productapi[id -1].desc}</p> {" "} */}
      </div>

    </>
    // <h1>{ProductsData[id - 1].name}</h1>{" "}
  );
}

export default ProductDisplay;
export { ProductDisplay }
//     <p>{ProductsData[id - 1].description}</p>{" "}