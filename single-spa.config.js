import { registerApplication, start } from "single-spa";

registerApplication(
  "navBar",
  () => import("./src/navBar/navBar.app.js").then(module => module.navBar),
  () => true
);

registerApplication(
  // Name of our single-spa application
  "home",
  // loadingFunction
  () => import("./src/home/home.app"),
  // activityFunction
  location =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home")
);

registerApplication(
  "datadash",
  () => import("./src/DataDash/DataDash.app"),
  location => location.pathname.startsWith("/datadash")
);

registerApplication(
  "dashboard",
  () => import("./src/dashboard/dashboard.app"),
  location => location.pathname.startsWith("/dashboard")
  // pathPrefix("/dashboard")
);

registerApplication(
  "counter",
  () => import("./src/Counter/Counter.app"),
  location => location.pathname.startsWith("/counter")
);

start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.indexOf(`${prefix}`) === 0;
  };
}
