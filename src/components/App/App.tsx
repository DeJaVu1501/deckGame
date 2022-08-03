import React, { FC } from "react";
import { Game } from "../Game/Game";
import { Results } from "../Results/Results";
import "./styles.scss";

export const App: FC = () => {
  return (
    <div className="wrapper">
      <Game />
      <Results />
    </div>
  );
};
