import React from "react";
import Blog from "../../src/components/blog/blog";
import SecondFooter from "../../src/components/second-footer/SecondFooter";
export default function Index({ ourBlogsHeaderSection, ourBlogsCardSection }) {
  return (
    <>
      <Blog
        ourBlogsHeaderSection={ourBlogsHeaderSection}
        ourBlogsCardSection={ourBlogsCardSection}
      />
      <SecondFooter />
    </>
  );
}

export async function getServerSideProps() {
  let ourBlogsHeader = await fetch("http://localhost:1337/api/our-blog-header");
  let ourBlogsHeaderSection = await ourBlogsHeader.json();

  let ourBlogsCard = await fetch(
    "http://localhost:1337/api/blog-cards?populate=*"
  );
  let ourBlogsCardSection = await ourBlogsCard.json();

  return {
    props: {
      ourBlogsHeaderSection,
      ourBlogsCardSection,
    },
  };
}
