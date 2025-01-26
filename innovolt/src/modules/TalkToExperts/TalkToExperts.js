import React from "react";
import { COUNTRIES_LIST } from "../../constants/Countries";
import styles from "./TalkToExperts.module.scss";

const TalkToExperts = () => {
  return (
    <div className={styles.talkToExpertContainer}>
      <div className={styles?.inputfieldscontainer}>
        <div className={styles?.phonefield}>
          <input
            type="number"
            className={styles.phoneinputfield}
            placeholder="+91 - Your Mobile Number"
          />
        </div>
        <div className={styles?.countryselect}>
          <select
            name="pets"
            id="pet-select"
            className={styles?.countrylistselect}
          >
            <option value="">Your State</option>
            {COUNTRIES_LIST?.map((country) => (
              <option value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>
      <button className={styles.talktoexpertbutton}>Talk to our experts</button>
    </div>
  );
};

export default TalkToExperts;
