import * as React from "react";

export function useKeyPress(key: string | string[], action?: () => void) {
	const [isDown, set] = React.useState(false);
	const keys = React.useMemo(() => (Array.isArray(key) ? key : [key]), [key]);

	const handleKeyDown = React.useCallback(
		(event: KeyboardEvent) => {
			if (!isDown && keys.includes(event.key)) {
				event.preventDefault();
				event.stopPropagation();
				set(true);
			}
		},
		[keys, isDown]
	);
	const handleKeyUp = React.useCallback(
		(event: KeyboardEvent) => {
			if (isDown && keys.includes(event.key)) {
				event.preventDefault();
				event.stopPropagation();
				set(false);
			}
		},
		[keys, isDown]
	);

	const handleWindowBlur = React.useCallback(() => {
		set(false);
	}, []);

	React.useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		window.addEventListener("blur", handleWindowBlur);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
			window.removeEventListener("blur", handleWindowBlur);
		};
	}, [handleKeyDown, handleKeyUp, handleWindowBlur]);

	React.useEffect(() => {
		if (isDown && action) action();
	}, [isDown, action]);

	return isDown;
}