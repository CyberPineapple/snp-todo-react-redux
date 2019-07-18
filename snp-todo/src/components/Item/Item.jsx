import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.css";

export default class Item extends PureComponent {
  state = {
    isVisibleDeleteButton: false,
    isEditing: false,
    itemText: ""
  };

  handleMouseOver = () => {
    this.setState({
      isVisibleDeleteButton: true
    });
  };

  handleMouseOut = () => {
    this.setState({
      isVisibleDeleteButton: false
    });
  };

  handleDoubleClick = () => {
    this.setState({
      isEditing: true,
      itemText: this.props.text
    });
  };

  handleInputFieldChange = event => {
    this.setState({
      itemText: event.target.value
    });
  };

  handleInputFieldBlur = () => {
    const {
      editItem,
      deleteItem,
      id
    } = this.props;
    const { itemText } = this.state;
    if (itemText !== "" && itemText[0] !== " ") {
      editItem(id, itemText);
      this.setState({
        isEditing: false
      });
    } else {
      deleteItem(id);
    }
  };

  handleInputFieldKeyPress = event => {
    if (event.key === "Enter") {
      const {
        editItem,
        deleteItem,
        id
      } = this.props;
      const { itemText } = this.state;
      if (itemText !== "" && itemText[0] !== " ") {
        editItem(id, itemText);
        this.setState({
          isEditing: false
        });
      } else {
        deleteItem(id);
      }
    }
  };

  handleCheckboxChange = () => {
    const {
      id,
      toggleItem
    } = this.props;
    toggleItem(id);
  };

  handleDeleteButtonClick = () => {
    const {
      id,
      deleteItem
    } = this.props;
    deleteItem(id);
  };

  render() {
    const { text, isChecked } = this.props;
    const { isEditing, itemText, isVisibleDeleteButton } = this.state;

    return (
      <li
        className={styles.block}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={this.handleCheckboxChange}
        />
        <label
          className={isChecked ? styles.textCompleted : styles.text}
          onDoubleClick={this.handleDoubleClick}
        >
          {text}
        </label>
        {isVisibleDeleteButton && (
          <button
            className={styles.buttonDelete}
            onClick={this.handleDeleteButtonClick}
          />
        )}
        {isEditing && (
          <input
            type="text"
            className={styles.edit}
            autoFocus
            value={itemText}
            onBlur={this.handleInputFieldBlur}
            onChange={this.handleInputFieldChange}
            onKeyPress={this.handleInputFieldKeyPress}
          />
        )}
      </li>
    );
  }
}

Item.propTypes = {
  value: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number
  }),
  toggleItem: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func
};
