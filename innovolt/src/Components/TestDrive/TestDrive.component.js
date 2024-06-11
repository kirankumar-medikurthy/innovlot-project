/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./TestDrive.style.scss";
import { TEST_DRIVE_IMAGE_URL } from "../../Utils/constants";

const TestDrive = () => {
  return (
    <div className="test-drive-container">
      <p className="test-drive-heading">
        Too good to be true? Take a test drive now to experience it!
      </p>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img
        className="test-drive-image"
        src={TEST_DRIVE_IMAGE_URL}
        alt="test-drive-image.png"
      />
      <div className="test-drive-contact-details">
        <input
          type="text"
          className="test-drive-input"
          placeholder="+91 -  Your Number"
        />
        <button className="test-drive-button">Test drive now</button>
      </div>
    </div>
  );
};

export default TestDrive;
