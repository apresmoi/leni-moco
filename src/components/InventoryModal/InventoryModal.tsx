import * as React from "react";
import { SlimeSocket } from "./SlimeSocket";
import { Slime } from "./Slime";
import { useGame } from "../../store";
import { Inventory } from "../../store/Game/types";
import { CloseButton } from "./CloseButton";
import { StartButton } from "./StartButton";
import InventoryDraw from "./InventoryDraw.svg";
import "./inventory.styles.scoped.scss";
import { useGameCanvas } from "../GameCanvas";

export function InventoryModal() {
  const size = useGameCanvas();
  const [selectedSlot, setSelectedSlot] = React.useState<string>("left");
  const [selectedSlime, setSeletedSlime] = React.useState<string>("basic");
  const game = useGame();
  const opositeSocket = selectedSlot === "right" ? "left": "right";

  //@ts-ignore
  const opositeSlime = game?.inventory[ opositeSocket + "Slime" ];
    //@ts-ignore
  const storedGlobalSlime = game?.inventory[ selectedSlot + "Slime" ];

  if (!game.showInventory) return null;

  function handleSlimeClick(color: string) {
    const socket = selectedSlot + "Slime";
      if(game.inventory &&  opositeSlime !== color){
        game.changeInventory((i) => ({ ...i, [socket]: color }));
      }
      setSeletedSlime(color);
  }

  function handleSocketSelection(name: string) {
    setSelectedSlot(name);
  }

  function handleCloseButton() {
    game.setShowInventory(false);
  }

  function renderSlimeDescription(element: string) {
    switch (element) {
      case "fire":
        return (
          <text className="description-text">
            <tspan x={60} y={490}>
              fiery small and hot ball of{" "}
            </tspan>
            <tspan x={60} y={515}>
              condensed fire.{" "}
            </tspan>
            <tspan x={60} y={565}>
              Skill: He’s so hot that it makes{" "}
            </tspan>
            <tspan x={60} y={590}>
              ice walls melt.
            </tspan>
            <tspan x={60} y={615}>
              Immune to: Lava pools.
            </tspan>
          </text>
        );
      case "water":
        return (
          <text className="description-text">
            <tspan x={60} y={490}>
              Water, do you know it kiddos?
            </tspan>
            <tspan x={60} y={510}>
              It's cool and fresh.{" "}
            </tspan>
            <tspan x={60} y={555}>
              Skill: Turns lava pools into
            </tspan>
            <tspan x={60} y={575}>
              stone floors with the fresh{" "}
            </tspan>
            <tspan x={60} y={595}>
              power of H2O. Immune to:{" "}
            </tspan>
            <tspan x={60} y={630}>
              Water pools, like the cool kids.
            </tspan>
            <tspan x={60} y={645}>
              Vulnerable against: Ice walls,
            </tspan>
            <tspan x={60} y={665}>
              thirsty creatures{" "}
            </tspan>
            <tspan x={60} y={685}>
              and Game Jammers.
            </tspan>
          </text>
        );
      case "darkness":
        return (
          <text className="description-text">
            <tspan x={60} y={490}>
              A solid round piece of shady{" "}
            </tspan>
            <tspan x={60} y={515}>
              shadow, born from oblivion and{" "}
            </tspan>
            <tspan x={60} y={535}>
              always on the watch.{" "}
            </tspan>
            <tspan x={60} y={565}>
              Skill: Merges with Shadow walls
            </tspan>
            <tspan x={60} y={590}>
              and pass through the Immune to:{" "}
            </tspan>
            <tspan x={60} y={615}>
              Smoke and naive super heroes
            </tspan>
            <tspan x={60} y={635}>
              who can't deal with his shadiness.
            </tspan>
            <tspan x={60} y={665}>
              Vulnerable against: Lava pools.
            </tspan>
          </text>
        );
    }
  }

  return (
    <>
      <g
        transform={`translate(${size.width / 2 - (775 * 0.7) / 2},${
          size.height / 2 - (741 * 0.7) / 2
        }) scale(0.7)`}
      >
        <image href={InventoryDraw} x="0" y="0" width="775" height="741" />
        <g>
          <SlimeSocket
            x={50}
            y={50}
            name={"left"}
            isSelected={selectedSlot === "left"}
            onClick={handleSocketSelection}
          />
          <SlimeSocket
            x={215}
            y={50}
            name={"right"}
            isSelected={selectedSlot === "right"}
            onClick={handleSocketSelection}
          />
          {game?.inventory?.leftSlime && (
            <Slime
              x={310}
              y={215}
              idx="inLeftSocket"
              name="left"
              color={game?.inventory?.leftSlime}
              onClick={handleSocketSelection}
            />
          )}
          {game?.inventory?.rightSlime && (
            <Slime
              x={470}
              y={215}
              idx="inRightSocket"
              name="right"
              color={game?.inventory?.rightSlime}
              onClick={handleSocketSelection}
            />
          )}
          <g>
            {/*  selected Slime and Description */}
            <Slime
              idx="sampleSlime"
              x={170}
              y={360}
              color={selectedSlime}
              onClick={handleSlimeClick}
              
            />
            <text x={60} y={440} className="description-text" fill="white">
              {selectedSlime} jam
            </text>
            {renderSlimeDescription(selectedSlime)}
          </g>
        </g>
        <g className=".lime-container">
          <Slime
            idx="inv01"
            x={365}
            y={360}
            color="fire"
            onClick={handleSlimeClick}
            isBlocked={opositeSlime === "fire" }
            isSelected={storedGlobalSlime === "fire"}
          />
          <Slime
            idx="inv02"
            x={465}
            y={360}
            color="water"
            onClick={handleSlimeClick}
            isBlocked={opositeSlime === "water"}
            isSelected={storedGlobalSlime ===  "water"}
          />
          <Slime
            idx="inv03"
            x={565}
            y={360}
            color="darkness"
            onClick={handleSlimeClick}
            isBlocked={opositeSlime === "darkness"}
            isSelected={storedGlobalSlime === "darkness"}
          />
        </g>

        <CloseButton x={740} y={120} onClick={handleCloseButton} />
        <StartButton x={370} y={680} onClick={handleCloseButton} />
      </g>
    </>
  );
}
