import Image from "next/image";
import Link from "next/link";
import React from "react";
import teamMember1 from "../../public/images/team-member1.jpg";
import teamMember2 from "../../public/images/team-member2.jpg";
import teamMember3 from "../../public/images/team-member3.jpg";
import teamMember4 from "../../public/images/team-member4.jpg";
import award from "../../public/images/award.png";
import { BsArrowUpRight } from "react-icons/bs";
export default function TeamPage() {
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
    </>
  );
}
