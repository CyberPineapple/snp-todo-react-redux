import React from "react";
import styles from "./Footer.module.css";
import FooterRadioButton from "./FooterRadioButton/";
import filters from "../../constants/filters";
import PropTypes from "prop-types";

const Footer = ({
  isVisibleDeleteButton,
  activeItemsCount,
  onDeleteCompletedItems,
  changeActiveFilter,
  activeFilter
}) => {
  return (
    <div className={styles.block}>
      <p className={styles.counter}>items left {activeItemsCount}</p>
      {filters.map(value => (
        <FooterRadioButton
          key={value}
          value={value}
          onChangeActiveFilter={changeActiveFilter}
          isChecked={activeFilter === value}
        />
      ))}
      {isVisibleDeleteButton && (
        <button
          className={styles.deleteButton}
          onClick={onDeleteCompletedItems}
        >
          delete completed
        </button>
      )}
    </div>
  );
};

Footer.propTypes = {
  activeFilter: PropTypes.string,
  onDeleteCompletedItems: PropTypes.func,
  isVisibleDeleteButton: PropTypes.bool,
  activeItemsCount: PropTypes.number,
  changeActiveFilter: PropTypes.func
};

export default Footer;
