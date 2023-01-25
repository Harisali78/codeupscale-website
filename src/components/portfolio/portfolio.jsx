import React, { useState } from "react";
import PortfolioProjectsCards from "../portfolio-cards/portfolio-projects-cards";
import PortfolioTechnologiesCards from "../portfolio-cards/portfolio-technologies-cards";
import PortfolioProjects from "../portfolio-sidebars/portfolio-projects";
import PortfolioTechnologies from "../portfolio-sidebars/portfolio-technologies";

export default function PortfolioComponent() {
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
              <h2>Our Work</h2>
              <h2>fueled by User Experience</h2>
              <p>
                Our work is spread across continents and leading industries, as
                we enjoy solving problems from all sectors. Today we work with
                major brands globally and are part of products and solutions
                that users love.
              </p>
            </div>
            {/* <PortfolioProjectsCards /> */}
            {portfolio === "projects" ? (
              <PortfolioProjectsCards />
            ) : (
              <PortfolioTechnologiesCards />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
