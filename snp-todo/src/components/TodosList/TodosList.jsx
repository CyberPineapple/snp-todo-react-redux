import React, { PureComponent } from "react";
import styles from "./TodosList.module.css";
import PropTypes from "prop-types";
import Item from "./Item";

export default class TodosList extends PureComponent {
  handleToggleAll = event => {
    this.props.toggleAllItems(event.target.checked);
  };

  getItemList = () => {
    const { itemsList, activeFilter } = this.props;
    switch (activeFilter) {
      case "all": {
        return itemsList;
      }
      case "completed": {
        return itemsList.filter(value => value.completed);
      }
      case "active": {
        return itemsList.filter(value => !value.completed);
      }
      default:
        return itemsList;
    }
  };

  render() {
    const { itemsList, editItem, toggleItem, deleteItem } = this.props;
    const listCompleted = itemsList.filter(value => value.completed);
    const itemsToShow = this.getItemList();

    return (
      <div className={styles.list}>
        <input
          type="checkbox"
          className={styles.buttonToggleAll}
          checked={itemsList.length === listCompleted.length}
          onChange={this.handleToggleAll}
        />
        <ul>
          {itemsToShow.map(value => (
            <Item
              text={value.text}
              id={value.id}
              isChecked={value.completed}
              key={value.id}
              deleteItem={deleteItem}
              toggleItem={toggleItem}
              editItem={editItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TodosList.propTypes = {
  isVisibleComponent: PropTypes.bool,
  itemsList: PropTypes.array,
  editItem: PropTypes.func,
  toggleItem: PropTypes.func,
  deleteItem: PropTypes.func
};
