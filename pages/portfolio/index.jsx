import React from "react";
import Portfolio from "../../src/components/portfolio/portfolio";
export default function PortfolioPage({
  ourPortfolioSection,
  ourPortfolioProjectsSection,
}) {
  return (
    <>
      <Portfolio
        ourPortfolioSection={ourPortfolioSection}
        ourPortfolioProjectsSection={ourPortfolioProjectsSection}
      />
    </>
  );
}

export async function getServerSideProps() {
  let ourPortfolio = await fetch(
    "http://localhost:1337/api/portfolio-section-header"
  );
  let ourPortfolioSection = await ourPortfolio.json();

  let ourPortfolioProjects = await fetch(
    "http://localhost:1337/api/portfolio-projects-cards?populate=*"
  );
  let ourPortfolioProjectsSection = await ourPortfolioProjects.json();

  return {
    props: {
      ourPortfolioSection,
      ourPortfolioProjectsSection,
    },
  };
}
