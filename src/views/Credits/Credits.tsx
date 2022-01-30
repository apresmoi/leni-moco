import React from "react";
import "./styles.scoped.scss";
import CreditsImg from "../../assets/Credits.svg";

export function Credits() {
  return (
    <div className="credits" >
      <img src={CreditsImg} alt="credits" />
    </div>
  )
}
