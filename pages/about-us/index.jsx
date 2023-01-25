import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import award from "../../public/images/award.png";
import story1 from "../../public/images/story1.jpg";
import story2 from "../../public/images/story2.jpg";
import story3 from "../../public/images/story3.jpg";
import story4 from "../../public/images/story4.jpg";
import WorkedWithBrands from "../../src/components/worked-with/worked-with-brands";
import teamMember1 from "../../public/images/team-member1.jpg";
import teamMember2 from "../../public/images/team-member2.jpg";
import teamMember3 from "../../public/images/team-member3.jpg";
import teamMember4 from "../../public/images/team-member4.jpg";
export default function AboutUs() {
  return (
    <>
      <section className="hero-about-section">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero-about-content">
                <h1 className="hero-about-title">
                  We're a full service creative and digital agency, working
                  globally with largest brands
                </h1>
                <div className="hero-about-info">
                  <div className="hero-about-btn">
                    <div className="hero-about-btn-wrapper">
                      <Link href={""}>
                        Trends & <br /> Technology
                        <BsArrowUpRight />
                      </Link>
                    </div>
                  </div>
                  <div className="hero-about-section-text">
                    <p>
                      Think of the world's most iconica and successful brands
                      easily findable, impactful. Interactional and exceptional
                      designs. Our story takes beginning in 2013
                    </p>
                  </div>
                  <div className="hero-about-section-award">
                    <Image src={award} alt="award" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row hero-video-row">
            <div className="col-xxl-12">
              <div className="hero-about-section-video">
                <video loop muted autoPlay playsInline>
                  <source src={aboutVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <section className="story-section-area">
        <div className="container">
          <div className="sec-story-title-wrapper">
            <div className="from-text">
              from <span>2015</span>
            </div>
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-story-subtitle">Digital Studio</h2>
                <h3 className="sec-story-anim">Our Story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="sec-story-text">
                  <p>
                    Your brand is the most important asset in your company let
                    our team of professionals help you with a good strategy took
                    the runway next with an edgy collection featuring dyed denim
                    pieces. The collection included patchwork denim, a trend
                    that has recently exploded in younger generations. Playing
                    on aspects of sustainability, the pieces appeared to be
                    upcycled to establish dimension and flair. This take on
                    grunge and streetwear took sustainable fashion to an
                    entirely new level.
                  </p>
                  <p>
                    ur specialized team of researchers, strategists, designers,
                    developers, and project managers work with streamlined
                    processes to break through organizational roadblocks. We
                    translate research into solutions, crafting thoughtful and
                    unified brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story-img-wrapper">
                <Image src={story1} alt="story1" />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story-img-wrapper story-img-wrapper-anim">
                <Image src={story2} alt="story2" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story-img-wrapper">
                <Image src={story3} alt="story3" />
                <Image src={story4} alt="story4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter-section-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="counter-wrapper counter-animation">
                <div className="counter-item">
                  <h2 className="counter-number">25k</h2>
                  <p>
                    Project <br />
                    Completed
                  </p>
                </div>
                <div className="counter-item">
                  <h2 className="counter-number">8k</h2>
                  <p>
                    Happy <br />
                    Customers
                  </p>
                </div>
                <div className="counter-item">
                  <h2 className="counter-number">7</h2>
                  <p>
                    Years <br />
                    Experience
                  </p>
                </div>
                <div className="counter-item">
                  <h2 className="counter-number">98</h2>
                  <p>
                    Award <br />
                    Achievement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area-section">
        <div className="sec-title-wrapper">
          <h2 className="sec-team-subtitle sec-team-title-anim">Our Team</h2>
          <h2 className="sec-team-title sec-team-title-anim">How we work</h2>
        </div>
        <div className="team-area-swiper">
          <div className="team-swiper-wrapper">
            <div className="team-member-swiper">
              <Link href={""}>
                <Image src={teamMember1} alt="Team member 1" />
                <div className="team-member-info">
                  <h4 className="team-member-name">Saymon D. Halk</h4>
                  <h5 className="team-member-role">Founder & CEO</h5>
                </div>
              </Link>
            </div>
            <div className="team-member-swiper">
              <Link href={""}>
                <Image src={teamMember2} alt="Team member 2" />
                <div className="team-member-info">
                  <h4 className="team-member-name">Jessica Oliver</h4>
                  <h5 className="team-member-role">Researcher</h5>
                </div>
              </Link>
            </div>
            <div className="team-member-swiper">
              <Link href={""}>
                <Image src={teamMember3} alt="Team member 3" />
                <div className="team-member-info">
                  <h4 className="team-member-name">Daniyel Adamson</h4>
                  <h5 className="team-member-role">Digital Marketer</h5>
                </div>
              </Link>
            </div>
            <div className="team-member-swiper">
              <Link href={""}>
                <Image src={teamMember4} alt="Team member 4" />
                <div className="team-member-info">
                  <h4 className="team-member-name">Hardiya Kethrine</h4>
                  <h5 className="team-member-role">Lead Designer</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WorkedWithBrands />
    </>
  );
}
