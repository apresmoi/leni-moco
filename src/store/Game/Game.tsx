import * as React from "react";
import { useSound } from "../../assets";
import { useMusic } from "../../hooks/useMusic";

import { Player, Position, Level } from "./types";

type IGameStoreContext = {
  player?: Player;
  onChangePlayer: (player: Player) => void;
  onChangePlayerPosition: (position: Position) => void;
  onChangePlayerSplitState: () => void;
  level?: Level;
  setLevel: (level: Level) => void;
  paused?: boolean;
  setPaused: (paused: boolean) => void;
};

export const GameStoreContext = React.createContext<IGameStoreContext>({
  onChangePlayer: () => {},
  onChangePlayerPosition: () => {},
  onChangePlayerSplitState: () => {},
  setLevel: () => {},
  setPaused: () => {},
});

export function useGame() {
  return React.useContext(GameStoreContext);
}

export function GameStore(props: React.PropsWithChildren<{}>) {
  const [player, setPlayer] = React.useState<Player>();
  const [paused, setPaused] = React.useState(true);
  const [level, setLevel] = React.useState<Level>();

  useMusic();

  const onChangePlayerSplitState = React.useCallback(() => {
    setPlayer((p) => ({ ...p, isSplited: !p!.isSplited } as Player));
  }, []);

  const contextValue = {
    player,
    level,
    paused,
    setLevel: setLevel,
    onChangePlayer: setPlayer,
    onChangePlayerPosition: (position: Position) => {
      if (
        position.x !== player?.position.x ||
        position.y !== player?.position.y
      )
        setPlayer((p) => ({ ...p, position } as Player));
    },
    onChangePlayerSplitState,
    setPaused,
  };

  return (
    <GameStoreContext.Provider value={contextValue}>
      {props.children}
    </GameStoreContext.Provider>
  );
}
