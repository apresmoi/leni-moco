import * as React from "react";
import { useMusic } from "../hooks/useMusic";

type ISettingsContext = {
  sound: boolean;
  toggleSound: () => void;
  music: { [k: string]: any };
};

export const SettingsStoreContext = React.createContext<ISettingsContext>({
  sound: true,
  toggleSound: () => null,
  music: {},
});

export function useSettings() {
  return React.useContext(SettingsStoreContext);
}

export function SettingsStore(props: React.PropsWithChildren<{}>) {
  const [sound, setSound] = React.useState(
    localStorage.getItem("sound") === "false" ? false : true
  );
  const toggleSound = React.useCallback(() => {
    setSound((sound) => {
      localStorage.setItem("sound", !sound ? "true" : "false");
      return !sound;
    });
  }, []);

  const { menuMusic, creditsMusic, stopAll } = useMusic();

  const contextValue = React.useMemo(() => {
    return {
      sound,
      toggleSound,
      music: {
        menuMusic,
        creditsMusic,
        stopAll,
      },
    };
  }, [sound, toggleSound, menuMusic, stopAll]);

  return (
    <SettingsStoreContext.Provider value={contextValue}>
      {props.children}
    </SettingsStoreContext.Provider>
  );
}
