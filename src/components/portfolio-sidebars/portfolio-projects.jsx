export default function PortfolioProjects() {
  return (
    <>
      <a href="#ui-ux">
        <div className="portfolio-tab-cards-tabBox">
          <h4 style={{ color: "aqua" }}>UX / UI</h4>
          <p>
            Usability audits <br /> UX research
          </p>
        </div>
      </a>
      <a href="#wordpress-laravel">
        <div className="portfolio-tab-cards-tabBox">
          <h4 style={{ color: "yellow" }}>WWW</h4>
          <p>
            Wordpress, Drupal <br /> Laravel
          </p>
        </div>
      </a>
      <a href="#mobile-app">
        <div className="portfolio-tab-cards-tabBox">
          <h4 style={{ color: "green" }}>Mobile apps</h4>
          <p>
            IOS, Andriod <br /> Ionic, Flutter
          </p>
        </div>
      </a>
    </>
  );
}
