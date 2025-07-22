import globals from 'globals'
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'

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
        { semi: false, singleQuote: true, trailingComma: 'all' }, // Убираем точки с запятой
      ],
      semi: ['error', 'never'], // Запрещаем точки с запятой
      'no-extra-semi': 'error', // Удаляет лишние точки с запятой
      'prefer-const': 'error',
    },
  },
])
