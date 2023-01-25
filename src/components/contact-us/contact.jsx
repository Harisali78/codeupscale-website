import Image from "next/image";
export default function Contact() {
  return (
    <div id="contact-bg">
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-xxl-12">
              <h1>
                Get started <br />
                now
              </h1>
              <p>
                If you would like to work with us or just want to get in <br />
                touch, we'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="location-address">
                <div>
                  <h3>London</h3>
                  <p>
                    Baltia Squar, Mark Street, <br /> London
                  </p>
                </div>
                <div>
                  <h3>New York</h3>
                  <p>
                    Nenuya Centre, Elia Street <br /> New York, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <div className="form-input-email">
                <input type="email" id="" placeholder="Enter your email" />
                <button>
                  <Image
                    src={`/images/arrow-black.png`}
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* <footer id="footer">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
              <div className="footer-copyright">
                <p>
                  © 2022 - 2025 | Alrights reserved <br /> by &nbsp;
                  <a href="https://codeupscale.com" target="_blank">
                    Codeupscale
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
              <div className="footer-nav">
                <ul className="footer-menu">
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
        </footer> */}
      </div>
    </div>
  );
}
