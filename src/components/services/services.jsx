import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
export default function Services({ ourServicesSection }) {
  return (
    <>
      <div className="container services-cards">
        <div className="row d-flex justify-content-center">
          {ourServicesSection.data.map((ourServices) => {
            return (
              <Link
                href="/our-services/branding-design"
                className="card"
                key={ourServices.id}
              >
                <div className="headings">
                  <h1>{ourServices.attributes.our_service_header} </h1>
                  <h1>
                    <span>
                      <hr />
                    </span>
                    {ourServices.attributes.our_service_header2}
                  </h1>
                </div>
                <p>{ourServices.attributes.our_service_info}</p>
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
            );
          })}
        </div>
      </div>
    </>
  );
}
