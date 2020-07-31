import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import recoilPersist from "recoil-persist";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const { RecoilPersist, updateState } = recoilPersist([], {
  key: "recoil-persist",
  storage: sessionStorage,
});

ReactDOM.render(
  <RecoilRoot initializeState={updateState}>
    <RecoilPersist />
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
