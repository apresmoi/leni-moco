import * as React from "react";
import { useHistory } from "react-router-dom";

export function useDisableGoBack() {
	const history = useHistory();
	const currentPath = React.useRef("");

	history.listen((newLocation, action) => {
		if (action === "PUSH") {
			if (newLocation.pathname !== currentPath.current) {
				currentPath.current = newLocation.pathname;
				history.push({
					pathname: newLocation.pathname,
					search: newLocation.search,
				});
			}
		} else {
			history.go(1);
		}
	});
}
