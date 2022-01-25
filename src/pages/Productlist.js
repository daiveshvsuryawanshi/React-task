import React, { useState } from "react";
import Productapi from "../api/Productapi";


const Productlist = () => {

    const [storeData, setstoredata] = useState(Productapi);

    const filterItem = (cateItem) => {
        const updateItem = Productapi.filter((curElem) => {
            return curElem.name === cateItem;
        });

        setstoredata(updateItem);

    }

    // Search Items
    function onChangeHandle(e) {
        console.log("e.target.value", e.target.value);
        if (e.target.value == '') {
            window.location.reload(true)
            const tempArr = Productapi;
            setstoredata(Productapi)
            return
        }
        const searchResult = Productapi.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setstoredata(searchResult);
    }


    return (
        <>
            {/* Filter List */}

            <div class="container mt-5">
                <div class="row d-flex pt-5">
                    <div class="col-6 mx-auto">
                        <div class="left-and-right-inner-addon input-container">
                            <i class="bi bi-search fs-4 my-auto right me-3"></i>
                            <input type="search" class="form-control" id="search" onChange={onChangeHandle} placeholder="Search Product..." />
                        </div>
                    </div>

                </div>
            </div>

            <div className="container  gap-3 d-md-flex p-2 justify-content-center mt-4">

                <button type="button" className="btn btn-style" onClick={() => setstoredata(Productapi)}>
                    All
                </button>

                <button type="button" className="btn btn-style " onClick={() => filterItem('earring')}>
                    Earring
                </button>

                <button type="button" className="btn btn-style" onClick={() => filterItem('neckless')}>
                    Neckless
                </button>

                <button type="button" className="btn btn-style" onClick={() => filterItem('bracelate')}>
                    Bracelate
                </button>

                <button type="button" className="btn btn-style" onClick={() => filterItem('kangan')}>
                    Kangan
                </button>

                <button type="button" className="btn btn-style " onClick={() => filterItem('ring')}>
                    Ring
                </button>

            </div>

            {/* Product List */}
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        Our Top Product
                    </h1>
                    <div className="row">
                        {storeData.map((curElem) => {
                            const { id, img, title, price } = curElem;
                            return (
                                <>
                                    <div
                                        className="col-11 col-md-6 col-lg-3 col-xxl-3 work-container-subdiv"
                                        key={id}>
                                    
                                        <img src={img} alt="images" className="img-fluid img-product" />
                                        <h4 className="sub-heading fw-bolder">{title}</h4>
                                        <p className="main-hero-para fw-bold">{price}</p>
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

export default Productlist;
