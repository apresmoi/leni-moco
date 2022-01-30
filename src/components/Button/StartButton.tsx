import * as React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./Button";


export function StartButton() {
  const history = useHistory();
  return (
    <Button label="Start Game" onClick={() => history.push('/play')} />
  );
}