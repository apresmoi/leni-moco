import * as React from "react";

import { Player, Position } from "./types";

type IGameStoreContext = {
  player?: Player;
  onChangePlayer: (player: Player) => void;
  onChangePlayerPosition: (position: Position) => void;
};

export const GameStoreContext = React.createContext<IGameStoreContext>({
  onChangePlayer: () => {},
  onChangePlayerPosition: () => {},
});

export function useGame() {
  return React.useContext(GameStoreContext);
}

export function GameStore(props: React.PropsWithChildren<{}>) {
  const [player, setPlayer] = React.useState<Player>();

  const contextValue = {
    player,
    onChangePlayer: setPlayer,
    onChangePlayerPosition: (position: Position) => {
      if (
        position.x !== player?.position.x ||
        position.y !== player?.position.y
      )
        setPlayer((p) => (p ? { ...p, position } : { position }));
    },
  };

  return (
    <GameStoreContext.Provider value={contextValue}>
      {props.children}
    </GameStoreContext.Provider>
  );
}
