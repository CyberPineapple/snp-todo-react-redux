import React, { PureComponent, Fragment } from "react";
import header from "./Header.module.css";
import PropTypes from "prop-types";
import Ghost from "./Ghost/";
import Pacman from "./Pacman/";

export default class Header extends PureComponent {
  state = {
    textOfTheNewItem: ""
  };

  handleChange = event => {
    this.setState({
      textOfTheNewItem: event.target.value
    });
  };

  handleKeyPress = event => {
    const { addNewItem } = this.props;
    const { textOfTheNewItem } = this.state;
    if (
      event.key === "Enter" &&
      textOfTheNewItem[0] !== " " &&
      textOfTheNewItem[1] !== " " &&
      textOfTheNewItem !== ""
    ) {
      addNewItem({
        text: textOfTheNewItem,
        id: Date.now(),
        completed: false
      });
      this.setState({
        textOfTheNewItem: ""
      });
    }
  };

  render() {
    const { isChangedInput } = this.props;
    const { textOfTheNewItem } = this.state;

    return (
      <Fragment>
        <div className={header.logo}>
          <Pacman />
          <div className={header.ghosts}>
            <Ghost color="red" />
            <Ghost color="orange" />
            <Ghost color="blue" />
          </div>
        </div>
        <input
          className={isChangedInput ? header.input : header.primalInput}
          type="text"
          autoFocus
          placeholder="What needs to be done?"
          value={textOfTheNewItem}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </Fragment>
    );
  }
}

Header.propTypes = {
  isChangedInput: PropTypes.bool,
  addNewItem: PropTypes.func
};
