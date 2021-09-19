import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/layout/main";

const App = () => {
  return <Layout />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
