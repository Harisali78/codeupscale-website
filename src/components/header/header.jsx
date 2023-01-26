import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
export default function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(20);
  const [boxShadow, setBoxShadow] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <Navbar
      expand="lg"
      className="sticky-top px-5 bg-white my-navbar"
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          <img
            src={"/images/logo.png"}
            alt="Picture of the Logo"
            className="logo-image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav.Link className="nav-item">
            <Link href="/">Home</Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link href="/about-us">About</Link>
          </Nav.Link>
          <div className="myDropdown nav-item">
            <button>Pages</button>
            <div className="mainMegaMenu">
              <div className="innerMegaMenu">
                <div className="services megaMenuItem">
                  <div className="links">
                    <h5>Service</h5>
                    <Link href="/our-services">Service</Link>
                    <Link href="/serviceDark">Service Dark</Link>
                    <Link href="/service2">Service V.2</Link>
                    <Link href="/service2Dark">Service V.2 Dark</Link>
                    <Link href="/service3">Service V.3</Link>
                    <Link href="/service3Dark">Service V.3 Dark</Link>
                    <Link href="/service4">Service V.4</Link>
                    <Link href="/service4Dark">Service V.4 Dark</Link>
                  </div>
                </div>
                <div className="portfolio megaMenuItem">
                  <div className="links">
                    <h5>Portfolio</h5>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/portfolioDark">Portfolio Dark</Link>
                    <Link href="/portfolio2">Portfolio V.2</Link>
                    <Link href="/portfolio2Dark">Portfolio V.2 Dark</Link>
                    <Link href="/portfolio3">Portfolio V.3</Link>
                    <Link href="/portfolio3Dark">Portfolio V.3 Dark</Link>
                    <Link href="/portfolio4">Portfolio V.4</Link>
                    <Link href="/portfolio4Dark">Portfolio V.4 Dark</Link>
                  </div>
                </div>
                <div className="team megaMenuItem">
                  <div className="links">
                    <h5>Team</h5>
                    <Link href="/team">Team</Link>
                    <Link href="/teamDark">Team Dark</Link>
                    <Link href="/team2">Team V.2</Link>
                    <Link href="/team2Dark">Team V.2 Dark</Link>
                    <Link href="/team3">Team V.3</Link>
                    <Link href="/team3Dark">Team V.3 Dark</Link>
                  </div>
                </div>
                <div className="blog megaMenuItem">
                  <div className="links">
                    <h5>Blog</h5>
                    <Link href="/blog">Blog</Link>
                    <Link href="/blogDark">Blog Dark</Link>
                    <Link href="/blog2">Blog V.2</Link>
                    <Link href="/blog2Dark">Blog V.2 Dark</Link>
                    <Link href="/blog3">Blog V.3</Link>
                    <Link href="/blog3Dark">Blog V.3 Dark</Link>
                  </div>
                </div>
                <div className="others megaMenuItem">
                  <div className="links">
                    <h5>Others</h5>
                    <Link href="/about">About</Link>
                    <Link href="/serviceDark">About Dark</Link>
                    <Link href="/service2">FAQs</Link>
                    <Link href="/service2Dark">FAQs Dark</Link>
                    <Link href="/service3">Contact</Link>
                    <Link href="/service3Dark">Contact Dark</Link>
                  </div>
                </div>
                <div className="portfolio megaMenuItem"></div>
                <div className="team megaMenuItem"></div>
                <div className="blog megaMenuItem"></div>
                <div className="others megaMenuItem"></div>
              </div>
            </div>
          </div>
          <div className="myDropdown nav-item">
            <button>Services</button>
            <div className="dropdownMenu">
              <h5 style={{ color: "#fff" }}>Service</h5>
              <Link href="/our-services" className="dropdownLink">
                Our Services
              </Link>
              <Link href="/service3" className="dropdownLink">
                Service V.3
              </Link>
              <Link href="/service4" className="dropdownLink">
                Service V.4
              </Link>
              <Link href="/service5" className="dropdownLink">
                Service V.5
              </Link>
              <Link href="/service6" className="dropdownLink">
                Service V.6
              </Link>
              <Link href="/service-details" className="dropdownLink">
                Service Details
              </Link>
            </div>
          </div>
          <Nav.Link className="nav-item">
            <Link href="/team">Team</Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link href="/blog">Blog</Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link href="/contact-us">Contact</Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
