import React, { Component, Fragment } from "react";
import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";
import TodosListContainer from "./containers/TodosListContainer";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <TodosListContainer />
        <FooterContainer />
      </Fragment>
    );
  }
}
