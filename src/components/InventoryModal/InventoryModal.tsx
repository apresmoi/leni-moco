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
  const [ selectedSlime, setSeletedSlime ] = React.useState<string>("none")
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

  return ( <>
            <g transform={`translate(350,20) scale(0.7)`}>
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
                      <g>
                        {/*  selected Slime and Description */}
                        <Slime x={170} y={360} color="fire"  onClick={handleSlimeClick} />
                          <text   className="description-text" >
                             
                              <tspan x={60} y={490}>Lorem Ipsum is simply ho</tspan> 
                              <tspan x={60} y={515}>Lorem Ipsum is simply ho</tspan>
                              <tspan x={60} y={540}>Lorem Ipsum is simply ho</tspan> 
                              <tspan x={60} y={565}>Lorem Ipsum is simply ho</tspan>
                              <tspan x={60} y={590}>Lorem Ipsum is simply ho</tspan>
                              <tspan x={60} y={615}>Lorem Ipsum is simply ho</tspan>
                              <tspan x={60} y={640}>Lorem Ipsum is simply ho</tspan>
                              <tspan x={60} y={665}>Lorem Ipsum is simply ho</tspan>    
                          </text>
                        </g>
                    </g>
                      <g className=".lime-container">
                          <Slime x={365} y={360} color="fire"  onClick={handleSlimeClick} />
                          <Slime x={465} y={360} color="water" onClick={handleSlimeClick} />
                          <Slime x={565} y={360} color="darkness" onClick={handleSlimeClick} />
                      </g> 


                     <CloseButton x={740} y={120}  onClick={handleCloseButton}/>
                    </g>
               </>
        
         );
}
