import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { deleteCompletedItemsAction, setActiveFilterAction } from "../actions";

class FooterContainer extends Component {
  render() {
    const {
      isVisibleComponent,
      activeItemsCount,
      isVisibleDeleteButton,
      deleteCompletedItems,
      activeFilter,
      changeActiveFilter
    } = this.props;

    return (
      isVisibleComponent && (
        <Footer
          isVisibleDeleteButton={isVisibleDeleteButton}
          activeItemsCount={activeItemsCount}
          onDeleteCompletedItems={deleteCompletedItems}
          changeActiveFilter={changeActiveFilter}
          activeFilter={activeFilter}
        />
      )
    );
  }
}

export default connect(
  state => {
    const { itemsList } = state;
    const activeItems = itemsList.filter(value => !value.completed);
    return {
      isVisibleComponent: itemsList.length > 0,
      activeItemsCount: activeItems.length,
      isVisibleDeleteButton: activeItems.length !== itemsList.length,
      activeFilter: state.activeFilter
    };
  },
  {
    deleteCompletedItems: deleteCompletedItemsAction,
    changeActiveFilter: setActiveFilterAction
  }
)(FooterContainer);
