import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import blogImage from "../../../public/images/blog-image.jpg";
import blogImage2 from "../../../public/images/blog-image2.jpg";
export default function Blog() {
  return (
    <section id="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="blog-sec-title-wrapper">
              <h2 className="blog-sec-sub-title">Recent Blog</h2>
              <h3 className="blog-sec-title">
                READ UPDATED <br /> JOURNAL
              </h3>
              <p>
                Read our blog and try to see everything from every perspective.
                Our passion lies in making everything accessible and aesthetic
                for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <article className="blog-item">
              <div className="blog-image-wrapper">
                <Link href="/blog/blog-1">
                  <div className="blog-image-box">
                    <Image
                      src={blogImage}
                      alt="blog"
                      className="blog-image-box-item"
                    />
                    <Image
                      src={blogImage}
                      alt="blog"
                      className="blog-image-box-item"
                    />
                  </div>
                </Link>
              </div>
              <div className="blog-info">
                <h4 className="blog-meta">
                  <Link href="">UI Design</Link>. 02 May 2019
                </h4>
                <h5>
                  <Link href="" className="blog-title">
                    How to bring fold to your startup company with Axtra
                  </Link>
                </h5>
                <Link href="" className="blog-btn">
                  Read more
                  <span>
                    <BsArrowUpRight />
                  </span>
                </Link>
              </div>
            </article>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <article className="blog-item">
              <div className="blog-image-wrapper">
                <Link href="/blog/blog-2">
                  <div className="blog-image-box">
                    <Image
                      src={blogImage2}
                      alt="blog"
                      className="blog-image-box-item"
                    />
                    <Image
                      src={blogImage2}
                      alt="blog"
                      className="blog-image-box-item"
                    />
                  </div>
                </Link>
              </div>
              <div className="blog-info">
                <h4 className="blog-meta">
                  <Link href="">UI Design</Link>. 02 May 2019
                </h4>
                <h5>
                  <Link href="" className="blog-title">
                    How to bring fold to your startup company with Axtra
                  </Link>
                </h5>
                <Link href="" className="blog-btn">
                  Read more
                  <span>
                    <BsArrowUpRight />
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
