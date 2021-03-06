import React, { Component } from "react";
import "./DataDash.css";
import axios from "axios";
import ListItem from "./ListItem/ListItem";
import { CircleLoader } from "react-spinners";
import { BrowserRouter as Router } from "react-router-dom";

class DataDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getPlaceholderData();
  }

  getPlaceholderData = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log("Error", err));
  };

  render() {
    const { data } = this.state;

    if (data && data.length > 1) {
      return (
        <Router basename="/datadash">
          <div className="data-dash-wrapper">
            {data.map((post, i) => {
              return <ListItem post={post} key={i} />;
            })}
          </div>
          <div>Test</div>
        </Router>
      );
    } else
      return (
        <Router basename="/datadash">
          <div className="data-dash-wrapper" style={{ marginTop: "75px" }}>
            <CircleLoader size={200} color={"lightblue"} />
          </div>
        </Router>
      );
  }
}

export default DataDash;
