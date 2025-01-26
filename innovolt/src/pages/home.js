import React from "react";
import HomePage from "@/modules/HomePage/HomePage";
import TalkToExperts from "@/modules/TalkToExperts/TalkToExperts";
import OurRangeProducts from "@/modules/OurRangeProducts/OurRangeProducts";
import WhyInnovolt from "@/modules/WhyInnovolt/WhyInnovolt";
import TestDrive from "@/modules/TestDrive/TestDrive";
import Faq from "@/modules/Faq/Faq";
const home = () => {
  return (
    <div>
      <div>
        <HomePage />
        <TalkToExperts />
        <OurRangeProducts />
        <WhyInnovolt />
        <TestDrive />
        <Faq />
      </div>
    </div>
  );
};

export default home;
