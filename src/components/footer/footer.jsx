import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import logo from "../../../public/images/logo.png";
export default function FooterComponent() {
  return (
    <>
      <div className="footer-area">
        <div className="footer-top">
          <div className="footer-line">
            <Image
              src={`/images/footer.jpg`}
              alt="Footer"
              height={662}
              width={1160}
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row footer-row">
              <div className="col-xxl-12">
                <div className="footer-inner">
                  <div className="footer-widget">
                    <Image src={logo} alt="LOGO" />
                    <p>
                      When do they work well, and when do they on us and
                      finally, when do we actually need how can we avoid them.
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a href="">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <BsTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <BsInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <BsLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget2">
                    <h2 className="footer-widget-title">Information</h2>
                    <ul className="footer-link">
                      <li>
                        <a href="">About Company</a>
                      </li>
                      <li>
                        <a href="">Case Study</a>
                      </li>
                      <li>
                        <a href="">Career</a>
                      </li>
                      <li>
                        <a href="">Blog</a>
                      </li>
                      <li>
                        <a href="">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget3">
                    <h2 className="footer-widget-title">Contact Us</h2>
                    <ul>
                      <li>Valentin, Street Road 24, New York, USA - 67452</li>
                      <li>
                        <a href="">+02) 574 - 328 - 301</a>
                      </li>
                      <li>
                        <a href="">info@buildyexample.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget4">
                    <h2 className="project-title">
                      Have a project in your mind?
                    </h2>
                    <div className="btn-wrapper">
                      <a href="">
                        <span>Contact us</span>
                      </a>
                      <h3 className="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                      <h4 className="contact-day">Saturday - Thursday</h4>
                    </div>
                  </div>
                  <div className="footer-copyright">
                    <p>
                      © 2022 - 2025 | Alrights reserved{" "}
                      <a href="">codeupscale.com</a>
                    </p>
                  </div>
                  <div className="footer-subscribe">
                    <form action="">
                      <input type="email" placeholder="Enter your email" />
                      <button className="subs-btn">
                        <FiSend />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
