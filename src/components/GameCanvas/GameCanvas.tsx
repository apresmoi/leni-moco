import * as React from "react";
// import ResizeObserver from "resize-observer-polyfill";
import debounce from "lodash.debounce";
import { ResizeObserver } from "@juggle/resize-observer";

type IGameCanvasContext = {
  width: number;
  height: number;
};

const GameCanvasContext = React.createContext<IGameCanvasContext>({
  width: 0,
  height: 0,
});

export function useGameCanvas() {
  return React.useContext(GameCanvasContext);
}

export function GameCanvas(props: React.PropsWithChildren<{}>) {
  const ref = React.useRef<HTMLDivElement>();

  const [size, set] = React.useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const updateSize = React.useCallback(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      if (!size || size.width !== width || size.height !== height)
        set({ width, height });
    }
  }, [ref, size]);

  React.useEffect(() => {
    const observer = new ResizeObserver(debounce(updateSize, 150));
    const { current } = ref;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, updateSize]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <svg width={size.width} height={size.height}>
        <GameCanvasContext.Provider value={size}>
          {props.children}
        </GameCanvasContext.Provider>
      </svg>
    </div>
  );
}
