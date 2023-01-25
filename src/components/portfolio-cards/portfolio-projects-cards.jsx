import whiteLogo from "../../../public/images/lot-white-new.png";
import whiteLogo2 from "../../../public/images/logo-white.png";
import whiteLogo3 from "../../../public/images/logo-white (1).png";
import whiteLogo4 from "../../../public/images/logo-white (2).png";
import whiteLogo5 from "../../../public/images/logo-white (3).png";
import whiteLogo6 from "../../../public/images/logo-white (4).png";
import cloudCard from "../../../public/images/clouds.png";
import planeCard from "../../../public/images/plane.png";
import screenCard from "../../../public/images/screen.png";
import projectCard from "../../../public/images/card.png";
import caseIcons from "../../../public/images/case_icons.png";
import earthImg from "../../../public/images/earth.png";
import sunImg from "../../../public/images/sun.png";
import sateliteImg from "../../../public/images/satelite.png";
import screens from "../../../public/images/screens.png";
import avatars from "../../../public/images/avatars.png";
import avatarsBlur from "../../../public/images/avatars-blur.png";
import avatarsUI from "../../../public/images/avatars-ui.png";
import Image from "next/image";
export default function PortfolioProjectsCards() {
  return (
    <div className="portfolio-cards">
      <div className="animated-card" id="ui-ux">
        <div className="card-images">
          <div className="portfolio-logo-image">
            <Image src={whiteLogo} alt="white logo" />
          </div>
          <div className="portfolio-clouds-image">
            <Image src={cloudCard} alt="clouds" />
          </div>
          <div className="portfolio-plane-image">
            <Image src={planeCard} alt="plane" />
          </div>
        </div>
        <div className="portfolio-card-content">
          <div className="ui-ux-cards">
            <div className="ux-card">UX</div>
            <div className="ui-card">UI</div>
          </div>
          <div className="portfolio-card-para">
            Together with LOT Polish Airlines, we are moving towards a high
            level of usability
          </div>
          <div className="explore-project-portfolio">
            <span>Explore the project</span>
          </div>
        </div>
      </div>
      <div className="animated-card second-project-card">
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
            Together with LOT Polish Airlines, we are moving towards a high
            level of usability
          </div>
          <div className="explore-project-portfolio">
            <span>Explore the project</span>
          </div>
        </div>
      </div>
      <div className="animated-card third-project-card" id="wordpress-laravel">
        <div className="card-images">
          <div className="portfolio-logo-image">
            <Image src={whiteLogo3} alt="white logo" />
          </div>
          <div className="portfolio-clouds-image">
            <Image src={caseIcons} alt="clouds" />
          </div>
          <div className="portfolio-plane-image">
            <Image src={projectCard} alt="plane" />
          </div>
        </div>
        <div className="portfolio-card-content">
          <div className="ui-ux-cards">
            <div className="ux-card">UX</div>
            <div className="ui-card">UI</div>
          </div>
          <div className="portfolio-card-para">
            Together with LOT Polish Airlines, we are moving towards a high
            level of usability
          </div>
          <div className="explore-project-portfolio">
            <span>Explore the project</span>
          </div>
        </div>
      </div>
      <div className="animated-card fourth-project-card">
        <div className="card-images">
          <div className="portfolio-logo-image">
            <Image src={whiteLogo4} alt="white logo" />
          </div>
          <div className="portfolio-clouds-image">
            <Image src={sunImg} alt="clouds" />
          </div>
          <div className="portfolio-clouds-image">
            <Image src={sateliteImg} alt="clouds" />
          </div>
          <div className="portfolio-plane-image">
            <Image src={earthImg} alt="plane" />
          </div>
        </div>
        <div className="portfolio-card-content">
          <div className="ui-ux-cards">
            <div className="ux-card">UX</div>
            <div className="ui-card">UI</div>
          </div>
          <div className="portfolio-card-para">
            Together with LOT Polish Airlines, we are moving towards a high
            level of usability
          </div>
          <div className="explore-project-portfolio">
            <span>Explore the project</span>
          </div>
        </div>
      </div>
      <div className="animated-card fifth-project-card" id="mobile-app">
        <div className="card-images">
          <div className="portfolio-logo-image">
            <Image src={whiteLogo5} alt="white logo" />
          </div>
          <div className="portfolio-clouds-image">
            <Image src={screens} alt="clouds" />
          </div>
          <div className="portfolio-plane-image">
            <Image src={avatars} alt="plane" />
          </div>
        </div>
        <div className="portfolio-card-content">
          <div className="ui-ux-cards">
            <div className="ux-card">UX</div>
            <div className="ui-card">UI</div>
          </div>
          <div className="portfolio-card-para">
            Together with LOT Polish Airlines, we are moving towards a high
            level of usability
          </div>
          <div className="explore-project-portfolio">
            <span>Explore the project</span>
          </div>
        </div>
      </div>
      <div className="animated-card sixth-project-card">
        <div className="card-images">
          <div className="portfolio-logo-image">
            <Image src={whiteLogo6} alt="white logo" />
          </div>
          <div className="portfolio-clouds-image">
            <Image src={avatarsBlur} alt="clouds" />
          </div>
          <div className="portfolio-plane-image">
            <Image src={avatarsUI} alt="plane" />
          </div>
        </div>
        <div className="portfolio-card-content">
          <div className="ui-ux-cards">
            <div className="ux-card">UX</div>
            <div className="ui-card">UI</div>
          </div>
          <div className="portfolio-card-para">
            Together with LOT Polish Airlines, we are moving towards a high
            level of usability
          </div>
          <div className="explore-project-portfolio">
            <span>Explore the project</span>
          </div>
        </div>
      </div>
    </div>
  );
}
