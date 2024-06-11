import React from "react";
import { HOMEPAGE_BANNER_IMAGE_URL } from "../../Utils/constants";
import "./HomePageBanner.style.scss";

const HomePageBanner = () => {
  return (
    <div className="homepage-banner-container">
      <img className="homepage-banner-image" src={HOMEPAGE_BANNER_IMAGE_URL} alt="landing_page_banner" />
    </div>
  );
};

export default HomePageBanner;
