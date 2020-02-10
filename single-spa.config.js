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
  "dashboard",
  () => import("./src/dashboard/dashboard.app"),
  location => location.pathname.startsWith("/dashboard")
);
start();
