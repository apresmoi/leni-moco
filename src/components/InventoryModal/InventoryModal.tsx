import * as React from "react";
import { SlimeSocket } from "./SlimeSocket";
import { Slime } from "./Slime";
import { useGame } from "../../store";
import { Inventory } from "../../store/Game/types";
import { CloseButton } from "./CloseButton";
import InventoryDraw from "./InventoryDraw.svg";
import "./inventory.styles.scoped.scss";

export function InventoryModal() {
  const [selectedSlot, setSelectedSlot] = React.useState<string>("left");
  const game = useGame();

  if (!game.showInventory) return null;

  function handleSlimeClick(color: string) {
    const socket = selectedSlot + "Slime";
    game.changeInventory((i) => ({ ...i, [socket]: color }));
  }

  function handleSocketSelection(name: string) {
    setSelectedSlot(name);
  }

  function handleCloseButton() {
    game.setShowInventory(false);
  }

  return (
    <>
      <g transform={`translate(350,20) scale(0.8)`}>
        <image href={InventoryDraw} x="0" y="0" width="775" height="741" />
        <g>
          <SlimeSocket
            x={50}
            y={50}
            name={"left"}
            onClick={handleSocketSelection}
          />
          <SlimeSocket
            x={215}
            y={50}
            name={"right"}
            onClick={handleSocketSelection}
          />
          {game?.inventory?.leftSlime && (
            <Slime
              x={310}
              y={215}
              name="left"
              color={game?.inventory?.leftSlime}
              onClick={handleSocketSelection}
            />
          )}
          {game?.inventory?.rightSlime && (
            <Slime
              x={470}
              y={215}
              name="right"
              color={game?.inventory?.rightSlime}
              onClick={handleSocketSelection}
            />
          )}
        </g>
        <g className=".lime-container">
          <Slime x={365} y={360} color="red" onClick={handleSlimeClick} />
          <Slime x={465} y={360} color="green" onClick={handleSlimeClick} />
          <Slime x={565} y={360} color="blue" onClick={handleSlimeClick} />
        </g>

        <CloseButton x={760} y={140} onClick={handleCloseButton} />
      </g>
    </>
  );
}
