import React from "react";
import FooterComponent from "../src/components/footer/footer";
import Header from "../src/components/header/header";

export default function ContactUs() {
  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2>
                  Let's get in <br />
                  touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact-page-text">
                <p>
                  Great! We're excited to hear from you and let's start
                  something special togerter. call us for any inquery.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact-page-form-info">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact-page-info">
                <h3>
                  Don't be afraid man! <br /> Say Hello
                </h3>
                <ul>
                  <li>
                    <a href="#">+(2) 578 - 365 - 379</a>
                  </li>
                  <li>
                    <a href="">codeupscale.com</a>
                  </li>
                  <li>
                    <span>
                      230 Norman Street New York, <br /> QC (USA) H8R 1A1
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact-page-form">
                <form action="">
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <select name="" id="">
                        <option value="" defaultValue disabled>
                          Select a service
                        </option>
                        <option value="">UI/UX Design</option>
                        <option value="">Web Design & Development</option>
                        <option value="">Cloud Migration</option>
                      </select>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <select name="" id="">
                        <option value="" defaultValue disabled>
                          Choose a budget
                        </option>
                        <option value="">$1-500k</option>
                        <option value="">$500-1000k</option>
                        <option value="">$1000-2000k</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Messages"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <button>
                        Send <br /> Messages
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
