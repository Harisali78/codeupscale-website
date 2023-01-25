import Link from "next/link";
import Contact from "../../src/components/contact-us/contact";
import Header from "../../src/components/header/header";
import { BsArrowUpRight, BsPlus } from "react-icons/bs";
import Image from "next/image";
import shape1 from "../../public/images/shape-1.png";
import shape2 from "../../public/images/shape-2.png";
import shape3 from "../../public/images/shape-3.png";
import FooterComponent from "../../src/components/footer/footer";
export default function ServicesPage() {
  return (
    <>
      <div className="services-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="services-hero-title-wrap">
                <h1 className="services-hero-title">
                  Award-winning &nbsp;
                  <Image src={shape1} alt="shape-1" />
                  digital solution agency
                  <Image src={shape2} alt="shape-2" />
                </h1>
              </div>
              <div className="services-hero-text">
                <h2 className="services-about">Service</h2>
                <p>
                  We question and try to see everything from every perspective.
                  Our passion lies in making everything universal human values,
                  to expand the possibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src={shape3} alt="shape-3" className="shape-1" />
      </div>
      {/* Services */}
      <div className="container services-cards">
        <div className="row d-flex justify-content-center">
          <Link href="/our-services/branding-design" className="card">
            <div className="headings">
              <h1>Branding </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Design
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/interactive-design" className="card">
            <div className="headings">
              <h1>Interactive </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Design
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/web&mobile-development" className="card">
            <div className="headings">
              <h1>Web & Mobile </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Development
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/digital-marketing" className="card">
            <div className="headings">
              <h1>Digital </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Marketing
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/business-strategy" className="card">
            <div className="headings">
              <h1>Business Strategy </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Design
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/illustration" className="card">
            <div className="headings">
              <h1>Illustration </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Modeling
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
        </div>
      </div>
      <section className="services-area-section">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="services-area-content">
                <p className="services-section-subtitle">Work with us</p>
                <h2 className="services-title">
                  <div>We would love to hear more</div>
                  <div>about your project</div>
                </h2>
                <div className="services-btn-wrapper">
                  <Link href="/contact-us">
                    <span>
                      Let's talk us
                      <BsArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
