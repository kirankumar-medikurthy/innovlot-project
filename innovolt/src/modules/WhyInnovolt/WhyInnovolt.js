import React from "react";
import style from "./WhyInnovolt.module.scss";

const WhyInnovolt = () => {
  return (
    <div className={style?.whyinnovoltcontainer}>
      <div className={style?.whyinnovoltheading}>Why Innovolt?</div>
      <div className={style?.whyinnovoltcontent}>
        <div className={style.batteryvarientcontainer}>
          <img
            src="/battery-varienty.svg"
            alt="battery-variant.svg"
          />
          <div className={style.whyinnovolttext}>
            3 years additional battery warrenty
          </div>
        </div>
        <div className="">
          <img src={"/choose-options.svg"} alt="choose-options.svg" />
          <div className={style.whyinnovolttext}>
            Many options to choose form
          </div>
        </div>
        <div className="">
          <img src="/document-transfer.svg" alt="document-transfer.svg" />
          <div className={style.whyinnovolttext}> Quick document transfer</div>
        </div>
        <div className="">
          <img src="/servicing.svg" alt="servicing-support.svg" />
          <div className={style?.whyinnovolttext}>
            Premium servicing support
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInnovolt;
