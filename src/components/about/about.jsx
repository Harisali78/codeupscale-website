import Image from "next/image";

export default function About({ ourGoalSection }) {
  return (
    <>
      <div className="container about-section">
        <h2>{ourGoalSection.our_goal_header}</h2>
        <div className="about-content">
          <div className="about-fixed-image"></div>
          <div className="about-content-para">
            <p>{ourGoalSection.our_goal_para}</p>
            <Image
              src={`http://localhost:1337${ourGoalSection.our_goal_signature.data.attributes.url}`}
              alt="shape"
              height={57}
              width={155}
            />
          </div>
          <div className="about-content-simple-image">
            <Image
              src={`http://localhost:1337${ourGoalSection.our_goal_first_img.data.attributes.url}`}
              alt="A3 Image"
              height={290}
              width={220}
            />
          </div>
        </div>
        <div className="about-content-last-image">
          <Image
            src={`http://localhost:1337${ourGoalSection.our_goal_second_img.data.attributes.url}`}
            alt="A2 Image"
            height={200}
            width={170}
          />
        </div>
      </div>
    </>
  );
}
