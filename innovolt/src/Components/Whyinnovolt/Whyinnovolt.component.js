import React from "react";
import "./Whyinnovolt.style.scss";

const Whyinnovolt = () => {
  return (
    <div className="whyinnovolt-container">
      <div className="whyinnovolt-heading">Why Innovolt?</div>
      <div className="whyinnovolt-content">
        <div className="battery-varient-container">
          <img
            src="../../../pulic/battery-varienty.svg"
            alt="battery-variant.svg"
          />
          <div className="battery-varienty-text whyinnovolt-text">
            3 years additional battery warrenty
          </div>
        </div>
        <div className="">
          <img src={"/choose-options.svg"} alt="choose-options.svg" />
          <div className="choose-options-text whyinnovolt-text">
            Many options to choose form
          </div>
        </div>
        <div className="">
          <img src="document-transfer.svg" alt="document-transfer.svg" />
          <div className="document-transfer-text whyinnovolt-text">
            {" "}
            Quick document transfer
          </div>
        </div>
        <div className="">
          <img src="servicing-support.svg" alt="servicing-support.svg" />
          <div className="servicing-support-text whyinnovolt-text">
            Premium servicing support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyinnovolt;
