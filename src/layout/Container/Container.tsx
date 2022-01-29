import * as React from "react";
import "./styles.scoped.scss";

export function Container(props: React.PropsWithChildren<{}>) {
	return <div className="container">{props.children}</div>;
}
