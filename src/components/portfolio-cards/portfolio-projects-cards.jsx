import Image from "next/image";
export default function PortfolioProjectsCards({
  ourPortfolioProjectsSection,
}) {
  return (
    <div className="portfolio-cards">
      {ourPortfolioProjectsSection.data.map((ourPortfolioProjects) => {
        return (
          <div
            className="animated-card animated-card-first"
            id="ui-ux"
            key={ourPortfolioProjects.id}
          >
            <div className="card-images">
              <div className="portfolio-logo-image">
                <Image
                  src={`http://localhost:1337${ourPortfolioProjects.attributes.project_logo.data.attributes.url}`}
                  alt="white logo"
                  fill
                />
              </div>
              <div className="portfolio-clouds-image">
                <Image
                  src={`http://localhost:1337${ourPortfolioProjects.attributes.project_image_2.data.attributes.url}`}
                  alt={`http://localhost:1337${ourPortfolioProjects.attributes.project_image_2.data.attributes.url}`}
                  fill
                />
              </div>
              <div className="portfolio-plane-image">
                <img
                  src={`http://localhost:1337${ourPortfolioProjects.attributes.project_image_1.data.attributes.url}`}
                  alt="plane"
                />
              </div>
            </div>
            <div className="portfolio-card-content">
              <div className="ui-ux-cards">
                <div className="ux-card">UX</div>
                <div className="ui-card">UI</div>
              </div>
              <div className="portfolio-card-para">
                {ourPortfolioProjects.attributes.project_info}
              </div>
              <div className="explore-project-portfolio">
                <span>
                  <hr /> Explore the project
                </span>
              </div>
            </div>
            {/* <div className="animated-card animated-card-second second-project-card">
              <div className="card-images">
                <div className="portfolio-logo-image">
                  <Image src={whiteLogo2} alt="white logo" />
                </div>
                <div className="portfolio-clouds-image">
                  <Image src={projectCard} alt="clouds" />
                </div>
                <div className="portfolio-plane-image">
                  <Image src={screenCard} alt="plane" />
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="ui-ux-cards">
                  <div className="ux-card">UX</div>
                  <div className="ui-card">UI</div>
                </div>
                <div className="portfolio-card-para">
                  Together with LOT Polish Airlines, we are moving towards a
                  high level of usability
                </div>
                <div className="explore-project-portfolio">
                  <span>
                    <hr /> Explore the project
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
