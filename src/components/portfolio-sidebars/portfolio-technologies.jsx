export default function PortfolioTechnologies() {
  return (
    <>
      <a href="#ui-ux">
        <div className="portfolio-tab-cards-tabBox">
          <h4 style={{ color: "aqua" }}>Frontend</h4>
          <p>
            Javascript, Vuejs <br /> React
          </p>
        </div>
      </a>
      <a href="#wordpress-laravel">
        <div className="portfolio-tab-cards-tabBox">
          <h4 style={{ color: "yellow" }}>Backend</h4>
          <p>
            Php, Laravel <br /> .Net
          </p>
        </div>
      </a>
      <a href="#mobile-app">
        <div className="portfolio-tab-cards-tabBox">
          <h4 style={{ color: "green" }}>E-commerece</h4>
          <p>
            WooCommerece <br /> Magento
          </p>
        </div>
      </a>
    </>
  );
}
