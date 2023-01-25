import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container about-section">
        <h2>
          We want to bring <br /> business and the digital <br /> world together
        </h2>
        <div className="about-content">
          <div className="about-fixed-image"></div>
          <div className="about-content-para">
            <p>
              We believe that we’ve managed to achieve what we set out to do.
              Today, we’re proud to bring together people who share our passion
              for change. This is how Outcrowd began. We were just a bunch of
              talented Ukrainians united by a common vision: creating a synergy
              of business and the digital world.
              <br />
              We were tired of stale design solutions. We felt strongly that
              design was more than pretty pictures: it was a powerful tool that
              could really transform business.
            </p>
            <Image
              src={"/images/shape-5.png"}
              alt="shape"
              height={57}
              width={155}
            />
          </div>
          <div className="about-content-simple-image">
            <Image
              src={"/images/a3.jpg"}
              alt="A3 Image"
              height={290}
              width={220}
            />
          </div>
        </div>
        <div className="about-content-last-image">
          <Image
            src={"/images/a2.jpg"}
            alt="A2 Image"
            height={200}
            width={170}
          />
        </div>
      </div>
    </>
  );
}
