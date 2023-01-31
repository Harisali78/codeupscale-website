import Image from "next/image";
import Link from "next/link";
import React from "react";
import secondLogo from "../../../public/images/logo.png";
export default function SecondFooter() {
  return (
    <footer className="second-footer-area">
      <div className="second-footer-top">
        <div className="second-footer-top-wrapper">
          <div className="second-footer-logo">
            <Image src={secondLogo} alt="LOGO" />
            <p>
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
          <div className="second-footer-social">
            <ul>
              <li>
                <a href="">FACEBOOK</a>
              </li>
              <li>
                <a href="">TWITTER</a>
              </li>
              <li>
                <a href="">LINKEDIN</a>
              </li>
              <li>
                <a href="">INSTAGRAM</a>
              </li>
            </ul>
          </div>
          <div className="second-footer-contact">
            <Link href="/contact-us">LET'S TALK</Link>
          </div>
        </div>
      </div>
      <div className="second-footer-bottom">
        <div className="second-container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="second-footer-copyright">
                <p>
                  &copy; 2022 - 2025 | Alrights reserved by{" "}
                  <a href="">codeupscale</a>
                </p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="second-footer-nav">
                <ul className="second-footer-menu">
                  <li>
                    <a href="">ABOUT US</a>
                  </li>
                  <li>
                    <a href="">CONTACT</a>
                  </li>
                  <li>
                    <a href="">CAREER</a>
                  </li>
                  <li>
                    <a href="">FAQS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
