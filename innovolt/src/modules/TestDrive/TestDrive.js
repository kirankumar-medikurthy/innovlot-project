import React from "react";
import style from "./TestDrive.module.scss";
import { TEST_DRIVE_IMAGE_URL } from "../../constants/BannerConstants";

const TestDrive = () => {
  return (
    <div className={style?.testdrivecontainer}>
      <p className={style.testdriveheading}>
        Too good to be true? Take a test drive now to experience it!
      </p>
      <img
        className={style.testdriveimage}
        src={TEST_DRIVE_IMAGE_URL}
        alt="testdriveimage.png"
      />
      <div className={style.testdrivecontactdetails}>
        <input
          type="text"
          className={style.testdriveinput}
          placeholder="+91 -  Your Number"
        />
        <button className={style.testdrivebutton}>Test drive now</button>
      </div>
    </div>
  );
};

export default TestDrive;
