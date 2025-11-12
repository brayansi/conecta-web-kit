import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'conecta-card',
  styleUrl: 'conecta-card.scss',
  shadow: true,
})
export class ConectaCard {
  /**
   * Variante visual do card.
   */
  @Prop({ reflect: true }) variant: 'flat' | 'outlined' | 'elevated' = 'flat';

  private getCardClasses(): string {
    const classes = ['conecta-card', `conecta-card--${this.variant}`];

    return classes.filter(Boolean).join(' ');
  }

  render() {
    return (
      <div class={this.getCardClasses()}>
        <slot></slot>
      </div>
    );
  }
}
