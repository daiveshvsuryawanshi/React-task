import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <h2>Shop</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                   
                  </ul>
                </div>

                
                <div className="col-12 col-lg-3">
                  <h2 >Services</h2>
                  <ul >
                    <li>
                      <a href="#">Custome Made Jwelary</a>
                    </li>
                    <li>
                      <a href="#">Bridal Jwelary</a>
                    </li>
                    <li>
                      <a href="#">Gold / silver Jwelary</a>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-12 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="bi bi-facebook fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                        <i class="bi bi-instagram fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="bi bi-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="bi bi-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 ABC Shop. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
