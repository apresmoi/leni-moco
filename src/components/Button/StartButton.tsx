import * as React from "react";
import { useHistory } from "react-router-dom";
import { useSound } from "../../assets";
import { useSettings } from "../../store";
import { Button } from "./Button";

export function StartButton() {
  const history = useHistory();
  const btnSound = useSound("btnSound");

  return (
    <Button
      label="Start Game"
      onClick={() => {
        btnSound?.play();
        history.push("/play");
      }}
    />
  );
}
