import * as React from "react";
import { useLocation } from "react-router-dom";
import { useSound } from "../assets";

export function useMusic() {
  const menuMusic = useSound("musicMenu", { loop: true });
  const creditsMusic = useSound("musicCredit", { loop: true });
  const dungeonMusic = useSound("musicDungeon", { loop: true });
  const ambianceMusic = useSound("ambianceDungeon", { loop: true });

  const alreadyPlayedMenuMusic = React.useRef(false);

  const location = useLocation();

  const playNeededSong = React.useCallback(() => {
    const path = location.pathname;

    setTimeout(() => {
      console.log("called with " + path);

      if (path === "/play") {
        dungeonMusic?.play();
        ambianceMusic?.play();
      }

      if (path === "/credits") {
        creditsMusic?.play();
      }

      if (path === "/") {
        menuMusic?.play();
      }
    }, 10);
  }, [location.pathname, menuMusic, ambianceMusic, dungeonMusic, creditsMusic]);

  React.useEffect(() => {
    const playMusic = () => {
      if (alreadyPlayedMenuMusic.current) {
        return;
      }
      alreadyPlayedMenuMusic.current = true;
      playNeededSong();
    };

    document.addEventListener("click", playMusic);
    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, [location.pathname, menuMusic, playNeededSong]);

  const stopAll = React.useCallback(() => {
    menuMusic?.stop();
    creditsMusic?.stop();
    dungeonMusic?.stop();
    ambianceMusic?.stop();
  }, []);

  React.useEffect(() => {
    stopAll();
    playNeededSong();
  }, [stopAll, playNeededSong]);

  return React.useMemo(() => {
    return {
      menuMusic,
      creditsMusic,
      stopAll,
    };
  }, [menuMusic, creditsMusic]);
}
