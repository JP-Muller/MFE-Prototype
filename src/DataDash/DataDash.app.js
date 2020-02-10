import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import DataDash from "./root.component.js";

function domElementGetter() {
  return document.getElementById("datadash");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: DataDash,
  domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];
