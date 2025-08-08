import React from "react";
import "./Contact.css";
import Nav from "../../components/Nav/Nav";
import NavSm from "../../components/NavSm/NavSm";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  return (
    <>
      <div>
        <div className="contact-home-body">
          <div className="contact-banner">
            <Nav />
            <NavSm />
            <div className="contact-overlay-item">
              <div className="contact-head">COntact US</div>
              <div className="contact-content">
                Reach out and let's bring your vision to life.
              </div>
            </div>
          </div>
          <div>
            <div className="form-content">
              <div className="Info-container">
                <div className="info-head">We’d love to hear from you</div>
                <div className="info-content">
                  Have a question, idea, or project in mind? Reach out and let's
                  make something great together.
                </div>
                <div className="info-address">
                  <div>No 30 Firstack lagos state</div>

                  <div>
                    <span>Phone : </span>+234 806 998 9705
                  </div>
                  <div>
                    <span>Phone : </span>+234 706 996 1314
                  </div>
                </div>
              </div>
              <div className="Form">
                <div className="form-first">
                  <div className="form-item">
                    <label htmlFor="">Name*</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form-item">
                    <label htmlFor="">Email*</label>
                    <input type="text" placeholder="Enter your Email Address" />
                  </div>
                </div>
                <div className="form-second">
                  <label htmlFor="">Message</label>
                  <textarea
                    name=""
                    placeholder="enter your message"
                    id=""
                  ></textarea>
                </div>
                <button className="Message-btn">
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send Messsage</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
