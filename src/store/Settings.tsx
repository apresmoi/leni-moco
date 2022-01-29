import * as React from "react";

type ISettingsContext = {
	sound: boolean;
	toggleSound: () => void;
};

export const SettingsStoreContext = React.createContext<ISettingsContext>({
	sound: true,
	toggleSound: () => null,
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

	const contextValue = React.useMemo(() => {
		return {
			sound,
			toggleSound,
		};
	}, [sound, toggleSound]);

	return (
		<SettingsStoreContext.Provider value={contextValue}>
			{props.children}
		</SettingsStoreContext.Provider>
	);
}
