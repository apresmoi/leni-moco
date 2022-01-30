import React from "react";
import "./styles.scoped.scss";
import { StartButton } from "../../components/Button";
import Logo from "../../assets/Logo.svg";
import Header from "../../assets/MocoHeader.svg";
import WallLeft from "../../assets/WallLeft.svg";
import WallRight from "../../assets/WallRight.svg";

export function Home() {
  return (
    <div className="home">
      <div className="header">
        <img className="image-header" src={Header} alt="moco" />
      </div>
      <div className="home-side">
        <img className="image-wall-left" src={WallLeft} alt="wall" />
      </div>
      <div className="home-center">
        <img className="image-logo" src={Logo} alt="DuoJam" />
        <StartButton />
      </div>
      <div className="home-side">
        <img className="image-wall-right" src={WallRight} alt="wall" />
      </div>
    </div>
  )
}
