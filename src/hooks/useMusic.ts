import * as React from "react";
import { useSound } from "../assets";

export function useMusic() {
  const music = useSound("dungeon", { loop: true });

  React.useEffect(() => {
    const playMusic = () => {
      music?.play();
    };

    document.addEventListener("keydown", playMusic);
    return () => {
      document.removeEventListener("keydown", playMusic);
    };
  }, [music]);
}
