import * as React from "react";
import { useMusic } from "../../hooks/useMusic";

import { Player, Level } from "./types";

type IGameStoreContext = {
  player?: Player;
  changePlayer: React.Dispatch<React.SetStateAction<Player | undefined>>;
  changePlayerSide: () => void;
  level?: Level;
  setLevel: (level: Level) => void;
  paused?: boolean;
  setPaused: (paused: boolean) => void;
};

export const GameStoreContext = React.createContext<IGameStoreContext>({
  changePlayer: () => {},
  changePlayerSide: () => {},
  setLevel: () => {},
  setPaused: () => {},
});

export function useGame() {
  return React.useContext(GameStoreContext);
}

export function GameStore(props: React.PropsWithChildren<{}>) {
  const [player, setPlayer] = React.useState<Player>({
    isSplited: false,
    active: "left",
  });
  const [paused, setPaused] = React.useState(true);
  const [level, setLevel] = React.useState<Level>();

  // useMusic();

  const contextValue = {
    player,
    level,
    paused,
    setLevel: setLevel,
    changePlayer: setPlayer,
    changePlayerSide: () => {
      setPlayer((p) =>
        p && p.isSplited
          ? { ...p, active: p.active === "left" ? "right" : "left" }
          : p
      );
    },
    setPaused,
  };

  return (
    <GameStoreContext.Provider value={contextValue}>
      {props.children}
    </GameStoreContext.Provider>
  );
}
