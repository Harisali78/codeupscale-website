import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <div className="container hero-section">
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
      </div>
      {/* <div className="bg-image"></div> */}
    </>
  );
}
