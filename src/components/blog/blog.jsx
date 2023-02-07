import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
export default function Blog({ ourBlogsHeaderSection, ourBlogsCardSection }) {
  return (
    <section id="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="blog-sec-title-wrapper">
              <h2 className="blog-sec-sub-title">
                {ourBlogsHeaderSection.data.attributes.our_blog_header}
              </h2>
              <h3 className="blog-sec-title">
                {ourBlogsHeaderSection.data.attributes.our_blog_header_title}
              </h3>
              <p>
                {ourBlogsHeaderSection.data.attributes.our_blog_header_info}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {ourBlogsCardSection.data.map((ourBlogCard) => {
            return (
              <>
                <div
                  className="col-xxl-6 col-xl-6 col-lg-6"
                  key={ourBlogCard.id}
                >
                  <article className="blog-item">
                    <div className="blog-image-wrapper">
                      <Link href={ourBlogCard.attributes.blog_detail_url}>
                        <div className="blog-image-box">
                          <Image
                            src={`http://localhost:1337${ourBlogCard.attributes.blog_image.data.attributes.url}`}
                            // src={blogImage}
                            alt="blog"
                            width={100}
                            height={100}
                            className="blog-image-box-item"
                          />
                          <Image
                            src={`http://localhost:1337${ourBlogCard.attributes.blog_image.data.attributes.url}`}
                            width={100}
                            height={100}
                            // src={blogImage}
                            alt="blog"
                            className="blog-image-box-item"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="blog-info">
                      <h4 className="blog-meta">
                        <Link href="">{ourBlogCard.attributes.blog_date}</Link>.
                      </h4>
                      <h5>
                        <Link href="" className="blog-title">
                          {ourBlogCard.attributes.blog_title}
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
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
