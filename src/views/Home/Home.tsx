import React from "react";
import "./styles.scoped.scss";
import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button";

export function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <Button label="PLAY" onClick={() => history.push('/play')} />
    </div>
  )
}
