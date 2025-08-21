import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';

export default tseslint.config(
  {
    // Global ignores
    ignores: ['.next/', 'dist/', 'coverage/'],
  },
  // Base config for all files
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Konfiguracja dla plików React/Next.js
    files: ['src/**/*.{ts,tsx}'],
    ...nextPlugin.configs.recommended,
    ...nextPlugin.configs['core-web-vitals'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Możesz tutaj nadpisać lub dodać własne reguły
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    // Konfiguracja dla plików JS w środowisku Node.js
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  // Prettier musi być ostatni, aby nadpisać inne reguły formatowania
  eslintPluginPrettier
);
