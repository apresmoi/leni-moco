import React, { useEffect } from "react";
import "./styles.scoped.scss";
import CreditsImg from "../../assets/Credits.svg";
import { useMusic } from "../../hooks/useMusic";
import { useSettings } from "../../store";

export function Credits() {
  const {music: {creditsMusic, stopAll}}= useSettings();

  useEffect(() => {
    stopAll && stopAll();
    creditsMusic?.play();
  }, [])
  
  return (
    <div className="credits" >
      <img src={CreditsImg} alt="credits" />
    </div>
  )
}
