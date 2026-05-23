import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default [
	js.configs.recommended,
	...astro.configs["flat/recommended"],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		rules: {
			"no-console": "warn",
		},
	},
	{
		ignores: ["dist/**", ".astro/**", "node_modules/**"],
	},
];
