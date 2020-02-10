import React from "react";
import { navigateToUrl } from "single-spa";

const NavBar = () => (
  <nav>
    <div className="nav-wrapper blue lighten-1">
      <a
        href="/"
        onClick={navigateToUrl}
        className="brand-logo"
        style={{ marginLeft: "10px" }}
      >
        Single SPA
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/" onClick={navigateToUrl}>
            Home
          </a>
        </li>
        <li>
          <a href="/datadash" onClick={navigateToUrl}>
            DataDash
          </a>
        </li>
        <li>
          <a href="/dashboard" onClick={navigateToUrl}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/counter" onClick={navigateToUrl}>
            Counter
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
