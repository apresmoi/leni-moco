import * as React from "react";

import { Player, Position } from "./types";

type IGameStoreContext = {
  player?: Player;
  onChangePlayer: (player: Player) => void;
  onChangePlayerPosition: (position: Position) => void;
  onChangePlayerSplitState: () =>  void;
};

export const GameStoreContext = React.createContext<IGameStoreContext>({
  onChangePlayer: () => {},
  onChangePlayerPosition: () => {},
  onChangePlayerSplitState: () =>  {},
});

export function useGame() {
  return React.useContext(GameStoreContext);
}



export function GameStore(props: React.PropsWithChildren<{}>) {
  const [player, setPlayer] = React.useState<Player>();
  
  const onChangePlayerSplitState = React.useCallback( 
    () => {
        setPlayer((p) =>({ ...p, isSplited: !p!.isSplited } as Player ));
        console.log(player?.isSplited); 
    }
  , []);

  const contextValue = {
    player,
    onChangePlayer: setPlayer,
    onChangePlayerPosition: (position: Position) => {
      if (
        position.x !== player?.position.x ||
        position.y !== player?.position.y
      )
        setPlayer((p) => ( { ...p, position } ) as Player);
    },
    onChangePlayerSplitState,
  };

  return (
    <GameStoreContext.Provider value={contextValue}>
      {props.children}
    </GameStoreContext.Provider>
  );
}
