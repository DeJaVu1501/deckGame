import React, { FC } from "react";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { PlaygroundDeck } from "../PlaygroundDeck/PlaygroundDeck";
import "./styles.scss";

export const Game: FC = () => {

  return (
    <div className="game-wrapper">
      <ControlPanel/>
      <PlaygroundDeck/>
    </div>
  );
};