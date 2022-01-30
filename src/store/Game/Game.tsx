import * as React from "react";
import { useMusic } from "../../hooks/useMusic";

import { Player, Position, Level, Inventory } from "./types";

type IGameStoreContext = {
  player?: Player;
  changePlayer: React.Dispatch<React.SetStateAction<Player | undefined>>;
  changePlayerPosition: (position: Position, position2: Position) => void;
  changePlayerSide: () => void;
  level?: Level;
  setLevel: (level: Level) => void;
  paused?: boolean;
  setPaused: (paused: boolean) => void;
  inventory?: Inventory;
  showInventory?: boolean;
  setShowInventory: (showInventory: boolean) => void;
  changeInventory: (inventory: Inventory) => void;
};

export const GameStoreContext = React.createContext<IGameStoreContext>({
  changePlayer: () => {},
  changePlayerPosition: () => {},
  changePlayerSide: () => {},
  setLevel: () => {},
  setPaused: () => {},
  changeInventory: () => {},
  setShowInventory: () => {},
});

export function useGame() {
  return React.useContext(GameStoreContext);
}

export function GameStore(props: React.PropsWithChildren<{}>) {
  const [player, setPlayer] = React.useState<Player>({
    isSplited: false,
    active: "left",
    position: { x: 0, y: 0 },
    position2: { x: 0, y: 0 },
  });
  const [paused, setPaused] = React.useState(true);
  const [level, setLevel] = React.useState<Level>();
  const [inventory, setInventory] =  React.useState<Inventory>();
  const [showInventory, setShowInventory] = React.useState(false);

  useMusic();

  const contextValue = {
    player,
    level,
    paused,
    inventory,
    showInventory,
    setLevel: setLevel,
    changePlayer: setPlayer,
    changePlayerSide: () => {
      setPlayer((p) =>
      p && p.isSplited ? { ...p, active: p.active === "left" ? "right" : "left" } : p
      );
    },
    changePlayerPosition: (position: Position, position2: Position) => {
      if (
        position.x !== player?.position.x ||
        position.y !== player?.position.y ||
        position2.x !== player?.position2.x ||
        position2.y !== player?.position2.y
        ) {
          setPlayer((p) => {
            return { ...p, position, position2 } as Player;
          });
        }
      },
    setPaused,
    changeInventory: setInventory,
    setShowInventory,
  };

  return (
    <GameStoreContext.Provider value={contextValue}>
      {props.children}
    </GameStoreContext.Provider>
  );
}
