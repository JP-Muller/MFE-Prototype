import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./Counter.css";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null
    };
  }

  componentDidMount = () => {
    this.setCount();
  };

  setCount = () => {
    this.setState({
      count: 0
    });
  };

  incrementCount = () => {
    let { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  decrementCount = () => {
    let { count } = this.state;
    this.setState({
      count: count - 1
    });
  };
  render() {
    let { count } = this.state;
    return (
      <Router basename="/counter">
        <div className="counter-wrapper">
          <h3>Class Counter</h3>
          <div className="current-count">
            <h1>{count}</h1>
          </div>
          <div className="button-container">
            <button onClick={() => this.decrementCount()}>
              <i className="far fa-minus-square" />
            </button>
            <button onClick={() => this.incrementCount()}>
              <i className="far fa-plus-square" />
            </button>
          </div>
        </div>
      </Router>
    );
  }
}

export default Counter;
