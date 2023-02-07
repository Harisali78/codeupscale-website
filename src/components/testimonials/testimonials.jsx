import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
export default function Testimonials({ ourTestimonialsSection }) {
  const [firstShow, setFirstShow] = useState(false);
  // const [secondShow, setSecondShow] = useState(false);
  // const [thirdShow, setThirdShow] = useState(false);

  const firstHandleClose = () => setFirstShow(false);
  // const firstHandleShow = () => setFirstShow(true);
  // const secondHandleClose = () => setSecondShow(false);
  // const secondHandleShow = () => setSecondShow(true);
  // const thirdHandleClose = () => setThirdShow(false);
  // const thirdHandleShow = () => setThirdShow(true);

  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonial-text">
          <h3>Testimonials</h3>
          <h5>
            Clients <br /> Feedback
          </h5>
          <p>
            Our happy customers give us impactfull and positive feedback on our
            services, customer supports & etc.
          </p>
        </div>
        <div className="row">
          {ourTestimonialsSection.data.map((ourTestimonial) => {
            return (
              <>
                <div className="testimonial" key={ourTestimonial.id}>
                  {ourTestimonial.attributes.testimonial_image.data.map(
                    (testimonialImage) => {
                      return (
                        <Image
                          src={`http://localhost:1337${testimonialImage.attributes.url}`}
                          width={300}
                          height={350}
                          key={testimonialImage.id}
                          // onClick={firstHandleShow}
                        />
                      );
                    }
                  )}
                  <h2>{ourTestimonial.attributes.testimonial_name}</h2>
                  <h3>{ourTestimonial.attributes.testimonial_designation}</h3>
                  <Modal
                    show={firstShow}
                    onHide={firstHandleClose}
                    className="my-iframe-content"
                  >
                    <Modal.Body className="iframe-modal">
                      <iframe
                        src="https://www.youtube.com/embed/vZgyWfmw_Kw"
                        title="YouTube video"
                        allowfullscreen
                        key={ourTestimonial.id}
                      ></iframe>
                    </Modal.Body>
                  </Modal>
                </div>
              </>
            );
          })}

          {/* <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
            <div className="testimonial-with-text">
              <div className="testimonial">
                <Image
                  src={`/images/testimonial1.png`}
                  width={300}
                  height={350}
                  onClick={firstHandleShow}
                />
                <h2>Jessica Sherlock</h2>
                <h3>Manager, Oitaka</h3>
                <Modal
                  show={firstShow}
                  onHide={firstHandleClose}
                  className="my-iframe-content"
                >
                  <Modal.Body className="iframe-modal">
                    <iframe
                      src="https://www.youtube.com/embed/vZgyWfmw_Kw"
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="testimonial-text">
                <h3>Testimonials</h3>
                <h5>
                  Clients <br /> Feedback
                </h5>
                <p>
                  Our happy customers give us impactfull and positive feedback
                  on our services, customer supports & etc.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial testimonial2">
            <Image
              src={`/images/testimonial2.png`}
              width={300}
              height={350}
              onClick={secondHandleShow}
            />
            <h2>Jessica Sherlock</h2>
            <h3>Manager, Oitaka</h3>
            <Modal
              show={secondShow}
              onHide={secondHandleClose}
              className="my-iframe-content2"
            >
              <Modal.Body className="iframe-modal2">
                <iframe
                  src="https://www.youtube.com/embed/7QkL-40FRfE"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="testimonial testimonial3">
            <Image
              src={`/images/testimonial3.png`}
              width={300}
              height={350}
              onClick={thirdHandleShow}
            />
            <h2>Jessica Sherlock</h2>
            <h3>Manager, Oitaka</h3>
            <Modal
              show={thirdShow}
              onHide={thirdHandleClose}
              className="my-iframe-content2"
            >
              <Modal.Body className="iframe-modal2">
                <iframe
                  src="https://www.youtube.com/embed/JulIeG1V8T4"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </Modal.Body>
            </Modal>
          </div> */}
        </div>
      </div>
    </div>
  );
}
