import globals from 'globals';
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.rules,
      'prettier/prettier': [
        'error',
        { semi: true, singleQuote: true, trailingComma: 'all' },
      ],
      semi: ['error', 'always'],
      'prefer-const': 'error',
    },
  },
]);
