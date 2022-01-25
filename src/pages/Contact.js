import React, { useState } from "react";
import Contactapi from "../api/Contactapi";

const Contact = () => {
    const [Contactdata, setContactdata] = useState(Contactapi)
    return (

        <>
            <div className="container py-5 mx-auto">

                <h1 className="main-heading text-center">Contact Us</h1>


                <section className="service-main-container">
                    <div className="container service-container">

                        <div className="row">
                            {Contactdata.map((curElem) => {
                                const { id, icon, info } = curElem;
                                return (
                                    <>
                                        <div
                                            className="col-12 col-md-4 col-lg-4 col-xxl-4 work-container-subdiv contact py-4  text-center"
                                            key={id}>
                                            <i className={icon}></i>
                                            <p className="contact-heading">{info}</p>

                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <div className="container col-7 py-5">
                    <h1 className="main-heading text-center">Get in Touch</h1>
                    <p className="lead mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <form className="py-5 fw-bold"/>
                        <div className="row">
                            <div className="Col-12 col-md-6">
                                <div class="mb-3">
                                    <label for="fname" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="fname" placeholder="First name" />
                                </div>
                            </div>

                            <div className="Col-12 col-md-6">
                                <div class="mb-3">
                                    <label for="lname" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lname" placeholder="Last name" />
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label"> Message </label>
                            <textarea class="form-control" id="Message" rows="3" placeholder="Type a message..."></textarea>
                        </div>
                        <div className="mb-3 float-end">
                            <button type="button" className="btn btn-style mx-3 ">
                                Submit
                            </button>
                        </div>
                </div>
            </div>
        <form/>


        
        </>

    )
}

export default Contact;