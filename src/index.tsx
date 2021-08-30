import React, { VFC } from "react";
import ReactDOM from "react-dom";
import { App } from "~/App";

import "~/styles/index.css";

export const Index: VFC = () => {
  return (
    <App />
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
