import React, { useState } from "react";

import map from "../../map";

let buttonMessages = {
  idle: "Setup phase",
  setup: "Play",
};

const log = console.log;
export default function Layout() {
  const [phase, setPhase] = useState("idle");
  const [player, setPlayer] = useState("A");
  return (
    <div className="main-container">
      <div className="left-column">
        <h3>Cryptid challenge </h3>
        <p>phase: {phase} </p>
        <button
          onClick={() => {
            setPhase("setup");
          }}
        >
          {buttonMessages[phase]}
        </button>
        {phase !== "idle" ?
        <div>
          player: {player}
        </div>
        : null }
      </div>
      <div className="body" id="map">
        {map()}
      </div>
      <div className="right-column"></div>
    </div>
  );
}
