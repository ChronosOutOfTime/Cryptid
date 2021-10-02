import React, { useState } from "react";

import map from "../../map";

let buttonMessages = {
  idle: "Setup phase",
  setup: "Play",
};
let actionMessages = {
  cube: "Put a cube on an empty tile",
  setup: "Play",
};

const log = console.log;
export default function Layout() {
  const [phase, setPhase] = useState("idle");
  const [player, setPlayer] = useState("A");
  const [action, setAction] = useState(actionMessages.cube);
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
        {phase !== "idle" ? (
          <div className="instructions">
            player: {player}
            <br />
            action: {action}
          </div>
        ) : null}
      </div>
      <div className="body" id="map">
        {map()}
      </div>
      <div className="right-column"></div>
    </div>
  );
}
