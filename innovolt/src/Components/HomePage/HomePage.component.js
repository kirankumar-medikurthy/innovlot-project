import { useMobile } from "../../Utils/findviewport";
import { INNOVOLT_LOGO_URL, MENUICON_URL } from "../../Utils/constants";
import HomePageBanner from "../HomePageBanner/HomePageBanner.component";
import TalkToExpert from "../TalkToExpert/TalkToExpert.component";
import OurRangeProducts from "../OurRangeProducts/OurRangeProducts.component";
import Whyinnovolt from "../Whyinnovolt/Whyinnovolt.component";
import TestDrive from "../TestDrive/TestDrive.component";
import Footer from "../Footer/Footer.component";
import Faq from "../Faq/Faq.component";
import "./HomePage.styles.scss";

const HomePage = () => {
  const isMobile = useMobile();
  const renderHeader = () => {
    return (
      <div className="header-container">
        <div className="left-container">
          <img className="menu-icon-image" src={MENUICON_URL} alt="menu icon" />
        </div>
        <div className="right-container">
          <img
            className="innovolt-logo-image"
            src={INNOVOLT_LOGO_URL}
            alt="innovolt.club, India's no.1 used commercial electric vehicle store"
          />
        </div>
      </div>
    );
  };
  return isMobile ? (
    <div>
      {renderHeader()}
      {HomePageBanner()}
      {TalkToExpert()}
      {OurRangeProducts()}
      {Whyinnovolt()}
      {TestDrive()}
      {Faq()}
      {Footer()}
    </div>
  ) : (
    <div>oops please check this website in the mobile view</div>
  );
};

export default HomePage;
