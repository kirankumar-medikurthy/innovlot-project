import React from "react";

const footer = () => {
  return (
    <div className="footercontainer">
      <div className="innovoltlogo">
        <img
          src="https://static.wixstatic.com/media/a66d89_7d0d3f90bfc4426187496f35693b0e12~mv2.png/v1/fill/w_380,h_114,al_c,q_85,usm_2.00_1.00_0.00,enc_auto/a66d89_7d0d3f90bfc4426187496f35693b0e12~mv2.png"
          alt="innovolt.club, India's no.1 used commercial electric vehicle store"
        />
      </div>
      <div className="address">
        <h2 className="companyname"> Blubble Private Limited </h2>
        <p>
          Industrial Plot Bearing No 7-A1, 3rd Cross Rd, Devasandra Industrial
          Estate, Krishnarajapura, Near VR Mall, Bengaluru, Karnataka - 560048.
        </p>
      </div>
      <div className="contactdetails">
        <div className="contactnumbercontainer">
          <img src="/phone.svg" alt="phone" />
          <a data-auto-recognition="true" href="tel:080-47484881">
            080-47484881
          </a>
        </div>
        <div className="emailaddresscontainer">
          <img src="" alt="" />
          <a href="mailto:siddharth.b@turno.club" target="_self">
            siddharth.b@turno.club
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
