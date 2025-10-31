import { Component, h, Prop, State } from '@stencil/core';
import { createElement, icons } from 'lucide';

@Component({
  tag: 'conecta-icon',
  styleUrl: 'conecta-icon.scss',
  shadow: true,
})
export class ConectaIcon {
  /**
   * Nome do ícone do Lucide
   */
  @Prop({ reflect: true }) name: string;

  /**
   * Variante do ícone
   */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'neutral' | 'currentColor' = 'currentColor';

  /**
   * Tamanho do ícone
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';

  @State() private iconSvg: string = '';

  componentWillLoad() {
    if (this.name) {
      this.iconSvg = this.getIconSvg();
    }
  }

  componentWillRender() {
    if (this.name) {
      this.iconSvg = this.getIconSvg();
    }
  }

  private getIconSvg(): string {
    if (!this.name) {
      return '';
    }

    const iconExport = (icons as Record<string, any>)[this.name] || (icons as Record<string, any>)[this.name?.replace(/-(\w)/g, (_, c) => c.toUpperCase()).replace(/^(\w)/, c => c.toUpperCase())];

    if (!iconExport) {
      console.warn(`Ícone "${this.name}" não encontrado no Lucide`);
      return '';
    }

    const svgEl = createElement(iconExport);

    return svgEl?.outerHTML || '';
  }

  private getIconClasses = () => {
    return ['conecta-icon', `conecta-icon--${this.variant}`, `conecta-icon--${this.size}`].join(' ');
  };

  render() {
    if (!this.iconSvg) {
      return null;
    }

    return <div class={this.getIconClasses()} innerHTML={this.iconSvg} />;
  }
}
