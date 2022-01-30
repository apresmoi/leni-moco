import React from "react";
import "./styles.scoped.scss";
import { YesButton, NoButton } from "../../components/Button";

interface ConfirmationProps {
  onClickYes: () => void;
  onClickNo: () => void;
  label: string;
}

export function Confirmation(props: ConfirmationProps) {
  return (
    <div className="confirmation">
      <div className="label">
        {props.label}
      </div>
      <div className="buttons">
        <div className="yes">
          <YesButton onClick={props.onClickYes} />
        </div>
        <div className="no">
          <NoButton onClick={props.onClickNo} />
        </div>
      </div>
    </div>
  )
}