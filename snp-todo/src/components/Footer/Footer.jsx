import React, { Component } from "react";
import styles from "./Footer.module.css";
import FooterRadioButton from "./FooterRadioButton/";
import filters from "../../constants/filters";
import PropTypes from "prop-types";

export default class Footer extends Component {
  render() {
    const {
      isVisibleDeleteButton,
      activeItemsCount,
      deleteCompletedItems,
      changeActiveFilter,
      activeFilter
    } = this.props;

    return (
      <div className={styles.block}>
        <p className={styles.counter}>items left {activeItemsCount}</p>
        {filters.map(value => (
          <FooterRadioButton
            key={value}
            value={value}
            changeActiveFilter={changeActiveFilter}
            isChecked={activeFilter === value}
          />
        ))}
        {isVisibleDeleteButton && (
          <button
            className={styles.deleteButton}
            onClick={deleteCompletedItems}
          >
            delete completed
          </button>
        )}
      </div>
    );
  }
}

Footer.propTypes = {
  activeFilter: PropTypes.string,
  deleteCompletedItems: PropTypes.func,
  isVisibleDeleteButton: PropTypes.bool,
  activeItemsCount: PropTypes.number,
  changeActiveFilter: PropTypes.func
};
