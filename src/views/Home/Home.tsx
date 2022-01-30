import React from "react";
import "./styles.scoped.scss";
import { StartButton } from "../../components/Button";
import Logo from "../../assets/Logo.svg";

export function Home() {
  return (
    <div className="home">
      <img className="image-logo" src={Logo} alt="logo" />
      <StartButton />
    </div>
  )
}
