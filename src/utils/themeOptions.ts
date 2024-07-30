import { createTheme, ThemeOptions } from "@mui/material";

// Define the custom theme
export const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: "#D9A738", // Gold color
		},
		background: {
			default: "rgb(13, 8, 1)", // Dark brown/black
			paper: "#1C140E",
		},
		text: {
			primary: "#FFFFFF", // White text
			secondary: "#A9A9A9", // Light gray text
		},
	},
	typography: {
		fontFamily: "Roboto, Arial, sans-serif",
		h6: {
			color: "#FFFFFF",
			fontWeight: 700,
		},
		body1: {
			color: "#A9A9A9",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: "8px 24px",
					backgroundColor: "#dfbe52",
					color: "#000",
					textTransform: "none",
					borderRadius: "10rem",
					"&:hover": {
						backgroundColor: "#b58930",
					},
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: "unset",
				},
			},
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					color: "#A9A9A9",
					"&:hover": {
						backgroundColor: "#D9A738",
						color: "#FFFFFF",
					},
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					color: "#A9A9A9",
				},
			},
		},
	},
};

export const theme = createTheme(themeOptions);
