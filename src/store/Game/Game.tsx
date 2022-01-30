import * as React from "react";
import { Size } from "../../utils/math";
import { useMusic } from "../../hooks/useMusic";
import { StatusSetter } from '../../sharedTypes';

import { Player, Level } from "./types";

type IGameStoreContext = {
  player?: Player;
  changePlayer: React.Dispatch<React.SetStateAction<Player>>;
  changePlayerSide: () => void;
  level: Level;
  setLevel: StatusSetter<Level>;
  paused?: boolean;
  setPaused: StatusSetter<boolean>;
};

const defaultLevel = { size: new Size(0, 0, 1000, 800), identifier: 'tutorial' } as const;
const defaultPlayer = { isSplited: false, active: "left" } as const;

export const GameStoreContext = React.createContext<IGameStoreContext>({
  changePlayer: () => { },
  changePlayerSide: () => { },
  setLevel: () => { },
  level: defaultLevel,
  setPaused: () => {},
});

export function useGame() {
  return React.useContext(GameStoreContext);
}

export function GameStore(props: React.PropsWithChildren<{}>) {
  const [player, setPlayer] = React.useState<Player>(defaultPlayer);
  const [paused, setPaused] = React.useState(true);
  const [level, setLevel] = React.useState<Level>(defaultLevel);

  useMusic();

  const changePlayerSide = React.useCallback(() => {
    setPlayer((p) =>
      p && p.isSplited
        ? { ...p, active: p.active === "left" ? "right" : "left" }
        : p
    );
  }, []);

  const contextValue = {
    player,
    level,
    paused,
    setLevel: setLevel,
    changePlayer: setPlayer,
    changePlayerSide,
    setPaused,
  };

  return (
    <GameStoreContext.Provider value={contextValue}>
      {props.children}
    </GameStoreContext.Provider>
  );
}
