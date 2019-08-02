import React, { Component } from "react";

import List from "../pages/todo/List";
import Register from "../pages/todo/Register";

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { token } = this.props.location.state;
    return (
      <div>
        <Register auth={token} />
        <List auth={token} />
      </div>
    );
  }
}
