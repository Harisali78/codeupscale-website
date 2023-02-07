import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
export default function HeroSection({ heroSection, partnerSection }) {
  return (
    <>
      {/* <div className="container hero-section">
        <div className="hero-section-images">
          <Image src={"/images/sh-1.jpg"} alt="sh 1" width={250} height={250} />
          <Image src={"/images/sh-2.jpg"} alt="sh 2" width={250} height={250} />
          <Image src={"/images/sh-3.jpg"} alt="sh 3" width={250} height={250} />
          <Image src={"/images/sh-4.jpg"} alt="sh 4" width={250} height={250} />
        </div>
        <div className="hero-content">
          <h1>CREATIVE</h1>
          <h1>SOLUTION</h1>
          <p>
            We take a similar approach to design <br /> commercial we do
            impactfully approches <br /> over the flowchart of user friendly{" "}
            <br />
            wireframe.
            <div className="down-arrow">
              <Image
                src={"/images/scroll.png"}
                alt="scroll icon"
                width={40}
                height={80}
                className="box"
              />
            </div>
          </p>
        </div>
        <div className="hero-squares">
          <div className="blue-square"></div>
          <div className="black-square"></div>
        </div>
      </div> */}
      <div className="hero-section">
        <div className="hero-section-content-image">
          <div className="hero-section-content">
            <h1>{heroSection.data.attributes.hero_header}</h1>
            <p>{heroSection.data.attributes.hero_paragraph}</p>
            <div className="hero-section-btns">
              <Link href="/contact-us" className="blog-btn">
                {heroSection.data.attributes.hero_contact_btn}
                <span>
                  <BsArrowUpRight />
                </span>
              </Link>
              <Link href="">
                {heroSection.data.attributes.hero_recent_work_btn}
              </Link>
            </div>
          </div>
          <div className="hero-section-image">
            <Image
              src={`http://localhost:1337${heroSection.data.attributes.hero_banner.data.attributes.url}`}
              className="hero-section-img"
              height={50}
              width={150}
            />
          </div>
        </div>
        <div className="hero-section-main-slider">
          <div className="hero-section-my-slider">
            <div className="hero-section-my-slide-track">
              {partnerSection.data.map((ourPartners) => {
                return (
                  <>
                    {ourPartners.attributes.images.data.map((myData) => {
                      return (
                        <div className="hero-section-my-slide" key={myData.id}>
                          <Image
                            src={`http://localhost:1337${myData.attributes.url}`}
                            alt=""
                            height={50}
                            width={150}
                          />
                        </div>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
