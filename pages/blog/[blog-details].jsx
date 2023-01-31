import Image from "next/image";
import React from "react";
import authorImage from "../../public/images/author.png";
import blogDetailImage from "../../public/images/blog-details-bg.jpg";
import blogDetailImage2 from "../../public/images/blog-details-image.jpg";
import blogDetailImage3 from "../../public/images/blog-details-image3.jpg";
import blog1 from "../../public/images/blog1.jpg";
import blog2 from "../../public/images/blog2.jpg";
import blog3 from "../../public/images/blog3.jpg";
import { BsPlus, BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
export default function BlogDetails() {
  return (
    <>
      <section className="blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog-detail-top">
                <h2 className="blog-detail-date">
                  Design, Marketing <span> - 25 Jan 2019</span>
                </h2>
                <h3 className="blog-detail-title">
                  Donate your design for newest designers to try better
                </h3>
                <div className="blog-detail-metalist">
                  <div className="blog-detail-meta">
                    <Image src={authorImage} alt="profile" />
                    <p>
                      Written by <span>Codexpand</span>
                    </p>
                  </div>
                  <div className="blog-detail-meta">
                    <p>
                      Viewed <span>3 min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog-detail-thumb">
                <Image src={blogDetailImage} alt="" />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog-detail-content">
                <p>
                  We love to bring designs to life as a developer, and I aim to
                  do this using whatever front end tools are necessary. My
                  preferred tools are more modern javascript libraries like
                  React.js but I like to use whatever is best for the websites
                  needs. There are several reasons why a business would consider
                  a rebrand and it doesn't necessarily mean the business has
                  been unsuccessful.
                </p>
                <p>
                  But in order that you may see whence all this born error of
                  those who accuse pleasure and praise pain, I will open the
                  whole matter, and explain the very things which were said by
                  that discoverer of truth and, as it were, the architect of a
                  happy life.
                </p>
                <Image src={blogDetailImage2} alt="" />
                <h2>Javascript</h2>
                <p>
                  We love to bring designs to life as a developer, and I aim to
                  do this using whatever front end tools are necessary. My
                  preferred tools are more modern javascript libraries like
                  React.js but I like to use whatever is best for the websites
                  needs. There are several reasons why a business would consider
                  a rebrand and it doesn't necessarily mean the business has
                  been unsuccessful.
                </p>
                <h2>Framework</h2>
                <p>
                  Always ready to push the boundaries, especially when it comes
                  to our own platform, Our analytical eye to create a site that
                  was visually engaging and also optimised for maximum
                  performance. It also perfectly reflects the journey to help it
                  tell a story to increase its understanding and drive action.
                  To create a site that was visually engaging for maximum
                  performance.
                </p>
                <ul>
                  <li>
                    <BsPlus className="services-plus-icon" />
                    Brand Development
                  </li>
                  <li>
                    <BsPlus className="services-plus-icon" /> UX/UI Design
                  </li>
                  <li>
                    <BsPlus className="services-plus-icon" />
                    Front-end Development
                  </li>
                  <li>
                    <BsPlus className="services-plus-icon" />
                    Copywriting
                  </li>
                  <li>
                    <BsPlus className="services-plus-icon" />
                    Shopify Development
                  </li>
                </ul>
                <h2>Visual Studio</h2>
                <p>
                  Just like other pseudo-elements and pseudo-class selectors,
                  :not() can be chained with other pseudo-classes and
                  pseudo-elements. For example, the following will add a “New!”
                  word to list items that do not have a .old class name, using
                  the ::after pseudo-element:
                </p>
                <Image src={blogDetailImage3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-related">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="blog-sec-title-wrapper">
                <h2 className="blog-sec-title-anim">Related Articles</h2>
              </div>
            </div>
          </div>
          <div className="row reset-grid">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog-detail-item">
                <div className="blog-detail-image-wrapper">
                  <Link href="">
                    <div className="blog-detail-image-box">
                      <Image
                        src={blog1}
                        alt="Blog Detail"
                        className="blog-detail-image-item"
                      />
                      <Image
                        src={blog1}
                        alt="Blog Detail"
                        className="blog-detail-image-item"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog-detail-meta-bottom">
                  <Link href="">UI Design</Link>. 02 May 2019
                </h4>
                <h5>
                  <Link href="" className="blog-detail-title-bottom">
                    Ways of lying to yourself about your new relationship.
                  </Link>
                </h5>
                <Link href="" className="blog-detail-btn-bottom">
                  Read more
                  <span>
                    <BsArrowUpRight />
                  </span>
                </Link>
              </article>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog-detail-item">
                <div className="blog-detail-image-wrapper">
                  <Link href="">
                    <div className="blog-detail-image-box">
                      <Image
                        src={blog2}
                        alt="Blog Detail"
                        className="blog-detail-image-item"
                      />
                      <Image
                        src={blog2}
                        alt="Blog Detail"
                        className="blog-detail-image-item"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog-detail-meta-bottom">
                  <Link href="">UI Design</Link>. 02 May 2019
                </h4>
                <h5>
                  <Link href="" className="blog-detail-title-bottom">
                    How to manage a talented and successfull design team
                  </Link>
                </h5>
                <Link href="" className="blog-detail-btn-bottom">
                  Read more
                  <span>
                    <BsArrowUpRight />
                  </span>
                </Link>
              </article>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog-detail-item">
                <div className="blog-detail-image-wrapper">
                  <Link href="">
                    <div className="blog-detail-image-box">
                      <Image
                        src={blog3}
                        alt="Blog Detail"
                        className="blog-detail-image-item"
                      />
                      <Image
                        src={blog3}
                        alt="Blog Detail"
                        className="blog-detail-image-item"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog-detail-meta-bottom">
                  <Link href="">UI Design</Link>. 02 May 2019
                </h4>
                <h5>
                  <Link href="" className="blog-detail-title-bottom">
                    How to bring fold to your startup company with Axtra
                  </Link>
                </h5>
                <Link href="" className="blog-detail-btn-bottom">
                  Read more
                  <span>
                    <BsArrowUpRight />
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
