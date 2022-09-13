import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<MantineProvider
		theme={{
			colorScheme: window.matchMedia("(prefers-color-scheme: dark)")
				? "dark"
				: "light",
		}}
	>
		<Auth0Provider
			domain="dev-0umvubdr.us.auth0.com"
			clientId="GTd4OW8AdTyNHxjy0Xd52qEPpWb0E3B4"
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</MantineProvider>
);
