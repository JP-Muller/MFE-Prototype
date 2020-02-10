import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideDrawer from "./SideDrawer/SideDrawer";
import "./dashboard.css";

export class Dashboard extends Component {
  render() {
    return (
      <Router basename="/dashboard">
            <div id="dashboard-master">
              <SideDrawer />
              <section id="dashboard-grid">
                <div id="top-left">test</div>
                <div id="bottom-left">test</div>
                <div id="top-right">test</div>
                <div id="bottom-right">test</div>
              </section>
              </div>
      </Router>
    );
  }
}

export default Dashboard;
