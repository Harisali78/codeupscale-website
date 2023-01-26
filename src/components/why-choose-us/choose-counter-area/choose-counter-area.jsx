import Image from "next/image";
import React from "react";
import chooseCounterImage from "../../../../public/images/counter-3.png";
export default function ChooseCounterArea() {
  return (
    <div className="why-choose-us-counter-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="choose-sec-title-wrapper">
              <h2 className="choose-sec-sub-title">
                WHY <br />
                CHOOSE US
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="choose-counter-wrapper">
              <div className="choose-counter-item">
                <h2 className="choose-counter-number">25K</h2>
                <p>
                  Project <br />
                  Completed
                </p>
              </div>
              <div className="choose-counter-item">
                <h2 className="choose-counter-number">8K</h2>
                <p>
                  Happy <br />
                  Customers
                </p>
              </div>
              <div className="choose-counter-item">
                <h2 className="choose-counter-number">15</h2>
                <p>
                  Years <br />
                  Experiences
                </p>
              </div>
              <div className="choose-counter-item">
                <h2 className="choose-counter-number">98</h2>
                <p>
                  Awards <br />
                  Achievement
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <div className="choose-counter-img">
              <Image src={chooseCounterImage} alt="counter image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
