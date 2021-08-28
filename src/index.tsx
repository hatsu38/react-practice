import React, { VFC } from "react";
import ReactDOM from "react-dom";

import "~/styles/index.css";


export const Index: VFC = () => {
  return (
    <h1 className="text-red-400">hoge</h1>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
