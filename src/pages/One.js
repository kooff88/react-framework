import React, { useState } from "react";
import { connect } from "react-redux";
import { addNameCreater, addAgeCreater, addNameAsync } from "../redux/actions";

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    let { number } = this.state;
    console.log("asd", this.props);
    let { lastage, addAgeCreater } = this.props;
    return (
      <div>
        one
        {lastage}
        <button
          onClick={() => {
            addAgeCreater(lastage + 1);
          }}
        >
          点击
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    lastname: state.addName,
    lastage: state.addAge
  }),
  { addNameCreater, addAgeCreater, addNameAsync }
)(One);
