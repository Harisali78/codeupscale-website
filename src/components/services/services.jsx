import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
export default function Services() {
  return (
    <>
      <div className="container services-cards">
        <div className="row d-flex justify-content-center">
          <Link href="/our-services/branding-design" className="card">
            <div className="headings">
              <h1>Branding </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Design
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/interactive-design" className="card">
            <div className="headings">
              <h1>Interactive </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Design
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/web&mobile-development" className="card">
            <div className="headings">
              <h1>Web & Mobile </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Development
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/digital-marketing" className="card">
            <div className="headings">
              <h1>Digital </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Marketing
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/business-strategy" className="card">
            <div className="headings">
              <h1>Business Strategy </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Design
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
          <Link href="/our-services/illustration-modeling" className="card">
            <div className="headings">
              <h1>Illustration </h1>
              <h1>
                <span>
                  <hr />
                </span>
                Modeling
              </h1>
            </div>
            <p>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <div className="subcategory-card">
              <li>
                <BsPlus className="services-plus-icon" />
                Logo Design
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Advertisement
              </li>
              <li>
                <BsPlus className="services-plus-icon" />
                Promotion
              </li>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
