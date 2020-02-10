import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideDrawer from "./SideDrawer/SideDrawer";
import "./dashboard.css";

export class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard-master">
        <SideDrawer />
        <section id="dashboard-grid">
          <div id="top-left"></div>
          <div id="bottom-left"></div>
          <div id="top-right"></div>
          <div id="bottom-right"></div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
