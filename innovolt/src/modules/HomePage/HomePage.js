import React from "react";
import { HOMEPAGE_BANNER_IMAGE_URL } from "../../constants/BannerConstants";
import style from "./HomePage.module.scss"
import TalkToExperts from "../TalkToExperts/TalkToExperts";

const HomePage = () => {
  const renderHomePageBanner = () => {
    return (
      <div className={style?.homepageBannerContainer}>
        <img
          className={style?.homepageBannerImage}
          src={HOMEPAGE_BANNER_IMAGE_URL}
          alt="landing_page_banner"
        />
      </div>
    );
  };

  return <div>{renderHomePageBanner()}</div>;
};

export default HomePage;
