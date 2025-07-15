import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      // Ваши правила ESLint
      ...js.rules,
      // Активируем prettier как правило
      "prettier/prettier": "error",
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },
]);
