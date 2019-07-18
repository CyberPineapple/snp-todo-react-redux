import React, { Fragment } from "react";
import styles from "./FooterRadioButton.module.css";
import PropTypes from "prop-types";

const FooterRadioButton = ({ value, isChecked, changeActiveFilter }) => {
  const handleChange = event => changeActiveFilter(event.target.value);

  return (
    <Fragment>
      <input
        type="radio"
        id={value}
        value={value}
        onChange={handleChange}
        checked={isChecked}
        className={styles.radio}
      />
      <label htmlFor={value} className={styles.button}>
        {value}
      </label>
    </Fragment>
  );
};

FooterRadioButton.propTypes = {
  value: PropTypes.string,
  changeActiveFilter: PropTypes.func,
  isChecked: PropTypes.bool
};

export default FooterRadioButton;
