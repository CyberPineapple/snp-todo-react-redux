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
    const { onEditItem, onDeleteItem, id } = this.props;
    const { itemText } = this.state;
    if (itemText !== "" && itemText[0] !== " ") {
      onEditItem(id, itemText);
      this.setState({
        isEditing: false
      });
    } else {
      onDeleteItem(id);
    }
  };

  handleInputFieldKeyPress = event => {
    if (event.key === "Enter") {
      const { onEditItem, onDeleteItem, id } = this.props;
      const { itemText } = this.state;
      if (itemText !== "" && itemText[0] !== " ") {
        onEditItem(id, itemText);
        this.setState({
          isEditing: false
        });
      } else {
        onDeleteItem(id);
      }
    }
  };

  handleCheckboxChange = () => {
    const { id, onToggleItem } = this.props;
    onToggleItem(id);
  };

  handleDeleteButtonClick = () => {
    const { id, onDeleteItem } = this.props;
    onDeleteItem(id);
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
  text: PropTypes.string,
  id: PropTypes.number,
  isChecked: PropTypes.bool,
  onToggleItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func
};
