import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import Image from "next/image";
import dev1 from "../../public/images/dev-1.jpg";
import dev2 from "../../public/images/dev-2.jpg";
import ServiceDetail from "../../public/images/service-detail.png";
import shape6 from "../../public/images/shape-6.png";
import faqImage from "../../public/images/faq.jpg";
import { Accordion } from "react-bootstrap";
export default function ServicesDetails() {
  return (
    <>
      <section className="development-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="services-details-title-wrapper">
                <h2 className="sec-title">Web and mobile development</h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="services-detail-development-wrapper">
                <div className="services-detail-development-content">
                  <p>
                    Every decision we make needs to answer the million-dollar
                    question: how will this benefit our partner's goal best? We
                    work to develop solutions
                  </p>
                  <p>
                    We like to be different, in the same way that every mission
                    is different. Every project is an opportunity to create
                    result that will help you
                  </p>
                </div>
                <ul>
                  <li>
                    <BsPlus className="plus-icon" /> API Development
                  </li>
                  <li>
                    <BsPlus className="plus-icon" /> Wordpress
                  </li>
                  <li>
                    <BsPlus className="plus-icon" /> Cloud Migration
                  </li>
                  <li>
                    <BsPlus className="plus-icon" /> Frontend Development
                  </li>
                  <li>
                    <BsPlus className="plus-icon" /> Javascript
                  </li>
                  <li>
                    <BsPlus className="plus-icon" /> Flutter Framework
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="services-detail-development-image">
                <Image src={dev1} alt="dev1" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="services-detail-development-image">
                <Image src={dev2} alt="dev2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-details-workflow">
        <div className="container">
          <div className="services-workflow-wrapper">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="services-workflow-slide">
                  <h6 className="services-workflow-title">
                    Planning and <br /> sketching
                  </h6>
                  <p>
                    Modern and unique design practically point of view, it risks
                    not meeting the huge expectations
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="services-workflow-slide">
                  <h6 className="services-workflow-title">
                    Team <br /> working
                  </h6>
                  <p>
                    Modern and unique design practically point of view, it risks
                    not meeting the huge expectations
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="services-workflow-slide">
                  <h6 className="services-workflow-title">
                    Flowchart and <br /> wireframe
                  </h6>
                  <p>
                    Modern and unique design practically point of view, it risks
                    not meeting the huge expectations
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="services-workflow-slide">
                  <h6 className="services-workflow-title">
                    User Experience <br /> Testing
                  </h6>
                  <p>
                    Modern and unique design practically point of view, it risks
                    not meeting the huge expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="services-details-sec-title-wrapper">
                <h2 className="services-details-sec-title-anim">
                  We replace unreliable wirefreme and expensive agencies for one
                  of the best organized layer.
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="services-details-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="services-details-image">
                <Image src={ServiceDetail} alt="services details" />
                <Image
                  src={shape6}
                  alt="Shape-6"
                  style={{
                    filter: "invert()",
                    width: "auto",
                    position: "absolute",
                    bottom: "-15px",
                    right: "20px",
                  }}
                />
              </div>
              <div className="services-details-content">
                <p>
                  Receive your design within a few business days, and be updated
                  on the process. Everything you need for a digitally driven
                  brand. Defined proposition. Conceptual realisation. Logo,
                  type, look, feel, tone, movement, content - we've got it
                  covered.
                </p>
                <p>
                  Getting your brand message out there. We create dynamic
                  campaign creative that engages audiences, wherever they are
                  most talented. Bring your brand to life, communicate your
                  value proposition with agile setup across creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-faq-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="services-faq-image">
                <Image src={faqImage} alt="faq image" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="services-faq-content">
                <h2 className="services-faq-title">
                  Product making for friendly users
                </h2>
                <div className="services-faq-list">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="services-details-accordion-header">
                        Design should enrich your day
                      </Accordion.Header>
                      <Accordion.Body className="services-details-accordion-body">
                        Our design services starts and ends with a best-in-class
                        experience strategy that builds brands. Through a
                        process of iteration and prototyping design interfaces
                        that bring joy to people
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Bring their individual experience and creative
                      </Accordion.Header>
                      <Accordion.Body className="services-details-accordion-body">
                        This is the second item's accordion body. It is hidden
                        by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Human centred design to challenges
                      </Accordion.Header>
                      <Accordion.Body className="services-details-accordion-body">
                        Our design services starts and ends with a best-in-class
                        experience strategy that builds brands. Through a
                        process of iteration and prototyping design interfaces
                        that bring joy to people
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Design should enrich your day
                      </Accordion.Header>
                      <Accordion.Body className="services-details-accordion-body">
                        Our design services starts and ends with a best-in-class
                        experience strategy that builds brands. Through a
                        process of iteration and prototyping design interfaces
                        that bring joy to people
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Developing core web applications
                      </Accordion.Header>
                      <Accordion.Body className="services-details-accordion-body">
                        Our design services starts and ends with a best-in-class
                        experience strategy that builds brands. Through a
                        process of iteration and prototyping design interfaces
                        that bring joy to people
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
