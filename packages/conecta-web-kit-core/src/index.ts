/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

export type * from './components.js';
export { format } from './utils/utils.js';

// Export component types for TypeScript support
export type { ConectaButton } from './components/conecta-button/conecta-button.js';
export type { ConectaCard } from './components/conecta-card/conecta-card.js';
export type { ConectaCheckbox } from './components/conecta-checkbox/conecta-checkbox.js';
export type { ConectaIcon } from './components/conecta-icon/conecta-icon.js';
export type { ConectaInput } from './components/conecta-input/conecta-input.js';
export type { ConectaSelect } from './components/conecta-select/conecta-select.js';
export type { ConectaTag } from './components/conecta-tag/conecta-tag.js';
export type { ConectaToaster } from './components/conecta-toaster/conecta-toaster.js';
export type { ConectaToggleIcon } from './components/conecta-toggle-icon/conecta-toggle-icon.js';
