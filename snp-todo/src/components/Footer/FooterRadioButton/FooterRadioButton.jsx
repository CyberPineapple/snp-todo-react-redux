import React, { Fragment, PureComponent } from "react";
import styles from "./FooterRadioButton.module.css";
import PropTypes from "prop-types";

class FooterRadioButton extends PureComponent {
  handleChange = event => {
    this.props.onChangeActiveFilter(event.target.value);
  };

  render() {
    const { value, isChecked } = this.props;
    return (
      <Fragment>
        <input
          type="radio"
          id={value}
          value={value}
          onChange={this.handleChange}
          checked={isChecked}
          className={styles.radio}
        />
        <label htmlFor={value} className={styles.button}>
          {value}
        </label>
      </Fragment>
    );
  }
}

FooterRadioButton.propTypes = {
  value: PropTypes.string,
  changeActiveFilter: PropTypes.func,
  isChecked: PropTypes.bool
};

export default FooterRadioButton;
