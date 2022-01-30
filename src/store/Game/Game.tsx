import * as React from "react";
import { Size } from "../../utils/math";
import { useMusic } from "../../hooks/useMusic";
import { StatusSetter } from "../../sharedTypes";

import { Player, Level, Inventory } from "./types";

type IGameStoreContext = {
  player?: Player;
  changePlayer: React.Dispatch<React.SetStateAction<Player>>;
  changePlayerSide: () => void;
  level: Level;
  setLevel: StatusSetter<Level>;
  paused?: boolean;
  setPaused: StatusSetter<boolean>;
  activeLevel: string;
  setActiveLevel: StatusSetter<string>;
  inventory?: Inventory;
  showInventory?: boolean;
  setShowInventory: (showInventory: boolean) => void;
  changeInventory: StatusSetter<Inventory>
};

const defaultLevel = {
  size: new Size(0, 0, 1000, 800),
  identifier: "tutorial",
  nextLevel: "end",
  conditions: {},
} as const;
const defaultPlayer = {
  isSplited: false,
  active: "left",
} as const;

export const GameStoreContext = React.createContext<IGameStoreContext>({
  changePlayer: () => {},
  changePlayerSide: () => {},
  setLevel: () => {},
  level: defaultLevel,
  setPaused: () => {},
  changeInventory: () => {},
  setShowInventory: () => {},
  activeLevel: "tutorial",
  setActiveLevel: () => {},
});

export function useGame() {
  return React.useContext(GameStoreContext);
}

export function GameStore(props: React.PropsWithChildren<{}>) {
  const [player, setPlayer] = React.useState<Player>(defaultPlayer);
  const [paused, setPaused] = React.useState(true);
  const [level, setLevel] = React.useState<Level>(defaultLevel);
  const [inventory, setInventory] = React.useState<Inventory>({
    leftSlime: "fire",
    rightSlime: "water",
  });
  const [showInventory, setShowInventory] = React.useState(false);
  const [activeLevel, setActiveLevel] = React.useState<string>("tutorial");

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
    inventory,
    showInventory,
    setLevel: setLevel,
    changePlayer: setPlayer,
    changePlayerSide,
    setPaused,
    activeLevel,
    setActiveLevel,
    changeInventory: setInventory,
    setShowInventory,
  };

  return (
    <GameStoreContext.Provider value={contextValue}>
      {props.children}
    </GameStoreContext.Provider>
  );
}
