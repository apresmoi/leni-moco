import { useSettings } from "../store";
import debounce from "lodash.debounce";
import * as React from "react";

const musicDungeon = new Audio("sounds/music-dungeon.mp3");
const ambianceDungeon = new Audio("sounds/ambiance-dungeon.mp3");
const musicCredit = new Audio("sounds/credit-screen.mp3");
const musicMenu = new Audio("sounds/menu.mp3");
const startBtnPress = new Audio("sounds/start-btn-press.mp3");
const btnSound = new Audio("sounds/btn-sound.mp3");
const movement = new Audio("sounds/slime_move_1.mp3");
const collision = new Audio("sounds/ouch_1.mp3");
const split = new Audio("sounds/split_1.mp3");
const join = new Audio("sounds/join_1_cut.mp3");
const select = new Audio("sounds/select_3.mp3");

// todo: add music tension variations
const musicTensions = [
  new Audio("sounds/keystroke1.mp3"),
  new Audio("sounds/keystroke2.mp3"),
  new Audio("sounds/keystroke3.mp3"),
];

export const sounds = {
  musicDungeon,
  ambianceDungeon,
  musicCredit,
  musicMenu,
  startBtnPress,
  btnSound,
  movement,
  collision,
  split,
  join,
  select,
};

interface AudioHelper {
  play: (...args: any) => void;
  stop: () => void;
}

export const useSound = (
  name: keyof typeof sounds,
  options?: {
    loop?: boolean;
    volume?: number;
  }
): AudioHelper | undefined => {
  const { sound: soundActivated } = useSettings();

  return React.useMemo(() => {
    //@ts-ignore
    const sound: HTMLAudioElement | undefined = sounds[name];

    const startPlaying = (soundAsset: HTMLAudioElement | undefined) => {
      if (soundActivated && soundAsset) {
        soundAsset.loop = options?.loop || false;
        soundAsset.volume = options?.volume || 1;
        soundAsset.play();
      }
    };

    let play = () => startPlaying(sound);
    if (Array.isArray(sound)) {
      play = () => sound.forEach(startPlaying);
    }

    if (sound)
      return {
        play,
        stop: () => {
          if (Array.isArray(sound)) {
            sound.forEach((s) => s?.pause());
          } else {
            setTimeout(() => {
              sound?.pause();
            }, 0)
          }
        },
      };
  }, [name, options, soundActivated]);
};

export const useRandomSound = (
  sounds: HTMLAudioElement[],
  options?: {
    loop?: boolean;
    volume?: number;
  }
): Pick<AudioHelper, "play"> => {
  const { sound: soundActivated } = useSettings();

  return React.useMemo(() => {
    const randomAudio = () => {
      const rnd = Math.floor(Math.random() * sounds.length);
      return sounds[rnd];
    };

    return {
      play: () => {
        if (soundActivated) {
          const audio = randomAudio();
          audio.loop = options?.loop || false;
          audio.volume = options?.volume || 1;
          return audio.play();
        }
        return new Promise(() => {});
      },
    };
  }, [sounds, options, soundActivated]);
};

export const useKeystrokeSound = (volume: number) => {
  const sounds = React.useMemo(() => [new Audio("sounds/slime_move.mp3")], []);
  return useRandomSound(sounds, { volume });
};

export const useDebounceSound = (
  sound: Pick<AudioHelper, "play">
): Pick<AudioHelper, "play"> => {
  const currentId = React.useRef<string | undefined>();
  return React.useMemo(() => {
    const play = debounce((id: string) => {
      if (currentId.current !== id) {
        currentId.current = id;
        return sound.play();
      }
      return null;
    }, 0);
    return {
      play,
    };
  }, [sound]);
};
