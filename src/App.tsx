import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Link from "./components/Link";
import ConnectButton from "./pages/ConnectButton";
import { theme } from "./utils/themeOptions";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/connect" element={<ConnectPage />} />
					</Routes>
				</Layout>
			</Router>
		</ThemeProvider>
	);
};

const HomePage: React.FC = () => (
	<div>
		<h1>Welcome to Zoro Protocol</h1>
		<Link href="/connect">Go to Connect page</Link>
	</div>
);

const ConnectPage: React.FC = () => (
	<div>
		<h1>Connect to Polygon Network</h1>
		<ConnectButton />
	</div>
);

export default App;
