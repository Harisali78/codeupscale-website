import React, { useEffect, useRef } from "react";
import ChooseCounterArea from "./choose-counter-area/choose-counter-area";
import ChooseCtaWrapper from "./choose-cta/choose-cta-wrapper";

import ChooseResearchArea from "./choose-research/choose-research-area";
import ChooseWfPanel from "./choose-wf-panel/choose-wf-panel";
export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current.style.overflowX = "scroll";
  }, []);
  return (
    <>
      <div className="why-choose-us-area" ref={sectionRef}>
        <div className="why-choose-us-pacer">
          <div className="why-choose-us-workflow-wrapper">
            <ChooseWfPanel />
            <ChooseResearchArea />
            <ChooseCounterArea />
            <ChooseCtaWrapper />
          </div>
        </div>
      </div>
    </>
  );
}
