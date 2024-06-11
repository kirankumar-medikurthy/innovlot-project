import React from "react";
import { COUNTRIES_LIST } from "../../Utils/constants";
import "./TalkToExpert.style.scss";

const TalkToExpert = () => {
  return (
    <div className="talk-to-expert-container">
        <div className="input-fields-container">
            <div className="phone-field">
                <input
                type="number"
                className="phone-input-field"
                placeholder="+91 - Your Mobile Number"
                />
            </div>
            <div className="country-select">
                <select name="pets" id="pet-select" className="country-list-select">
                <option value="">Your State</option>
                {COUNTRIES_LIST?.map((country) => (
                    <option value={country}>{country}</option>
                ))}
                </select>
            </div>
        </div>
      <button className="talk-to-expert-button">Talk to our experts</button>
    </div>
  );
};

export default TalkToExpert;
