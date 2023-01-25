import React from "react";

export default function InfiniteScrollMenu() {
  return (
    <>
      <div className="position-relative marquee-container d-sm-block">
        <div className="marquee d-flex justify-content-around">
          <li>
            <a href="">Agency</a>
          </li>
          <li>
            <a href="">Typography</a>
          </li>
          <li>
            <a href="">Design</a>
          </li>
          <li>
            <a href="">Interaction</a>
          </li>
          <li>
            <a href="">Element</a>
          </li>
        </div>
        <div className="marquee marquee2 d-flex justify-content-around">
          <li>
            <a href="">Agency</a>
          </li>
          <li>
            <a href="">Typography</a>
          </li>
          <li>
            <a href="">Design</a>
          </li>
          <li>
            <a href="">Interaction</a>
          </li>
          <li>
            <a href="">Element</a>
          </li>
        </div>
      </div>
    </>
  );
}
