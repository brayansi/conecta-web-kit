import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'conecta-tag',
  styleUrl: 'conecta-tag.scss',
  shadow: true,
})
export class ConectaTag {
  /**
   * Variante da tag
   */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'neutral' = 'primary';

  /**
   * Tamanho da tag
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    return (
      <span class={`conecta-tag conecta-tag--${this.variant} conecta-tag--${this.size}`}>
        <slot></slot>
      </span>
    );
  }
}
