import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<MantineProvider
		theme={{
			colorScheme: window.matchMedia("(prefers-color-scheme: dark)")
				? "dark"
				: "light",
		}}
	>
		<App />
	</MantineProvider>
);
