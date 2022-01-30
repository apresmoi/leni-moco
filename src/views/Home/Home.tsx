import React from "react";
import "./styles.scoped.scss";
import { StartButton } from "../../components/Button";
import Logo from "../../assets/Logo.svg";
import Header from "../../assets/MocoHeader.svg";
import WallLeft from "../../assets/WallLeft.svg";
import WallRight from "../../assets/WallRight.svg";
import BackgroundHome from "../../assets/BackgroundHome.svg";

export function Home() {
  return (
    <div className="home">
      <div className="start-game">
        <StartButton />
      </div>
      {/* <img className="background-home" src={BackgroundHome} alt="moco" /> */}
      {/* <div className="header"></div>
      <div className="home-side">
        <img className="image-wall-left" src={WallLeft} alt="wall" />
      </div>
      <div className="home-center">
        <img className="image-logo" src={Logo} alt="DuoJam" /> */}
      {/* </div>
      <div className="home-side">
        <img className="image-wall-right" src={WallRight} alt="wall" />
      </div> */}
    </div>
  );
}
