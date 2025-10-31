const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const stencilPlugin = require('eslint-plugin-stencil');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'www/**',
      'loader/**',
      '**/*.d.ts',
      '**/*.js.map',
      '**/*.esm.js.map',
      '**/*.cjs.js.map',
      'packages/*/dist/**',
      'packages/*/www/**',
      'packages/*/loader/**',
      'packages/*/node_modules/**',
      'packages/conecta-web-kit-angular/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        HTMLElement: 'readonly',
        Element: 'readonly',
        Event: 'readonly',
        CustomEvent: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      stencil: stencilPlugin,
    },
    rules: {
      // TypeScript específicas
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^h$',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',

      // JavaScript básicas
      'no-unused-vars': 'off', // Usar a versão TypeScript
      'no-undef': 'off', // TypeScript cuida disso
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'off',

      // Stencil específicas
      'stencil/required-jsdoc': 'off',
      'stencil/required-jsdoc-public': 'off',

      // Formatação (deixar para o Prettier)
      semi: 'off',
      quotes: 'off',
      indent: 'off',
      'comma-dangle': 'off',
    },
  },
  {
    files: ['**/*.stories.{ts,tsx,js,jsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
