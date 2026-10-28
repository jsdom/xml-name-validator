import domenicConfig from "@domenic/eslint-config";
import domenicStylisticConfig from "@domenic/eslint-config/stylistic";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
  ...domenicConfig,
  ...domenicStylisticConfig,
  {
    rules: {
      "no-misleading-character-class": "off",
    },
  },
];
