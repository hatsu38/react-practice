import React, { VFC } from "react";
import ReactDOM from "react-dom";

import "~/styles/index.css";
import {ApartmentTop} from "~/components/pages"

export const App: VFC = () => {
  return (
    <>
      <h1 className="text-red-400">hoge</h1>
      <ApartmentTop />
    </>
  );
};
