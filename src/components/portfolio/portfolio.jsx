import React, { useState } from "react";
import PortfolioProjectsCards from "../portfolio-cards/portfolio-projects-cards";
import PortfolioTechnologiesCards from "../portfolio-cards/portfolio-technologies-cards";
import PortfolioProjects from "../portfolio-sidebars/portfolio-projects";
import PortfolioTechnologies from "../portfolio-sidebars/portfolio-technologies";

export default function PortfolioComponent({
  ourPortfolioSection,
  ourPortfolioProjectsSection,
}) {
  const [portfolio, setPortfolio] = useState("projects");
  return (
    <div className="portfolio-structure">
      <div className="containers">
        <div className="portfolio-sidebar-cards">
          <div className="portfolio-sidebar">
            <div className="portfolio-mainTabs">
              <button
                className="portfolio-mainTabs-button"
                onClick={() => setPortfolio("projects")}
              >
                <h2 className="portfolio-mainTabs-title">Portfolio</h2>
              </button>
              <button
                className="portfolio-mainTabs-button"
                onClick={() => setPortfolio("technologies")}
              >
                <h2 className="portfolio-mainTabs-title">Technologies</h2>
              </button>
            </div>
            {portfolio === "projects" ? (
              <PortfolioProjects />
            ) : (
              <PortfolioTechnologies />
            )}
          </div>
          <div className="portfolio-description">
            <div className="portfolio-description-content">
              <h2>{ourPortfolioSection.portfolio_section_heading}</h2>
              <h2>{ourPortfolioSection.portfolio_section_heading2}</h2>
              <p>{ourPortfolioSection.portfolio_section_info}</p>
            </div>
            {portfolio === "projects" ? (
              <PortfolioProjectsCards
                ourPortfolioProjectsSection={ourPortfolioProjectsSection}
              />
            ) : (
              <PortfolioTechnologiesCards
                ourPortfolioProjectsSection={ourPortfolioProjectsSection}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
