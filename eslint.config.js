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
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.rules,
      // Прочие ваши правила ESLint
      "prettier/prettier": "error", // Активируем Prettier как правило ESLint
    },
  },
]);
