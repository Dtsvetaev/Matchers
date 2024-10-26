import { fileURLToPath } from "url";
import path from "path";
import globals from "globals";
import pluginJs from "@eslint/js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: [
      path.resolve(__dirname, "node_modules/**"),
      path.resolve(__dirname, "coverage/**"),
    ], 
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
  
];
