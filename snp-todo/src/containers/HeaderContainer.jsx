import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { addNewItemAction } from "../actions/";

class HeaderContainer extends Component {
  render() {
    const { isChangedInput, addNewItem } = this.props;
    return <Header isChangedInput={isChangedInput} addNewItem={addNewItem} />;
  }
}

export default connect(
  state => ({
    isChangedInput: !state.itemsList.length
  }),
  { addNewItem: addNewItemAction }
)(HeaderContainer);
