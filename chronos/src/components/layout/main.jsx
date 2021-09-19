import React from "react";

import map from "../../map";

export default function Layout() {
  return (
    <div className="main-container">
      <div className="left-column">
        <h3>Cryptid challenge</h3>
      </div>
      <div className="body" id="map">
        {map()}
      </div>
      <div className="right-column"></div>
    </div>
  );
}
