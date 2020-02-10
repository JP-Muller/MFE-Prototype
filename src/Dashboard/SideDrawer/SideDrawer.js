import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./SideDrawer.css";
import coglogo from "../../assets/cognisight-white.png";

function SideDrawer() {
  const [homeToggled, toggleHome] = React.useState(false);
  const [notifsToggled, toggleNotifs] = React.useState(false);
  const [settingsToggled, toggleSettings] = React.useState(false);

  return (
    <div>
      <nav id="side-drawer">
        <div id="drawer-nav-list">
          <ul>
            <li>
              <i className="fas fa-home" onClick={() => toggleHome(!homeToggled)} />
            </li>
            <li>
              <i
                className="far fa-bell"
                onClick={() => toggleNotifs(!notifsToggled)}
              />
            </li>
            <li>
              <i
                className="fas fa-cog"
                onClick={() => toggleSettings(!settingsToggled)}
              />
            </li>
          </ul>
        </div>
      </nav>
      <section id="drawer-wrapper">
        <div>
          <header id="drawer-header">
            <img src={coglogo} alt="Mock Logo" id="mock-logo" />
          </header>
          <ul id="drawer-nav-list">
            <li className="drawer-li">Dashboard</li>
            <li className="drawer-li">Members</li>
            <li className="drawer-li">Locations</li>
            <li className="drawer-li">HIOS Codes</li>
            <li className="drawer-li">Custom Reports</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SideDrawer;
