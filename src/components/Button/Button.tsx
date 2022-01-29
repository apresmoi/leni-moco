import * as React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export function Button(props: ButtonProps) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}