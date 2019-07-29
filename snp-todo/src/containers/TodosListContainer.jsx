import React, { Component } from "react";
import { connect } from "react-redux";
import TodosList from "../components/TodosList/";
import {
  toggleAllItemsAction,
  editItemAction,
  toggleItemAction,
  deleteItemAction
} from "../actions/";

class TodosListContainer extends Component {
  render() {
    const {
      isVisibleComponent,
      activeFilter,
      itemsList,
      toggleAllItems,
      editItem,
      toggleItem,
      deleteItem
    } = this.props;
    return (
      isVisibleComponent && (
        <TodosList
          activeFilter={activeFilter}
          itemsList={itemsList}
          onToggleAllItems={toggleAllItems}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          editItem={editItem}
        />
      )
    );
  }
}

export default connect(
  state => ({
    itemsList: state.itemsList,
    activeFilter: state.activeFilter,
    isVisibleComponent: state.itemsList.length > 0
  }),
  {
    toggleAllItems: toggleAllItemsAction,
    deleteItem: deleteItemAction,
    toggleItem: toggleItemAction,
    editItem: editItemAction
  }
)(TodosListContainer);
