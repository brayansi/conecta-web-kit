import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'conecta-button',
  styleUrl: 'conecta-button.scss',
  shadow: true,
})
export class ConectaButton {
  /**
   * Tipo do botão
   */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'neutral' = 'primary';

  /**
   * Tamanho do botão
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Se o botão está desabilitado
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Se o botão está em estado de loading
   */
  @Prop({ reflect: true }) loading: boolean = false;

  /**
   * Tipo do botão HTML
   */
  @Prop({ reflect: true }) type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Evento emitido quando o botão é clicado
   */
  @Event() buttonClick: EventEmitter<MouseEvent>;

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  };

  render() {
    return (
      <button
        type={this.type}
        class={`conecta-button conecta-button--${this.variant} conecta-button--${this.size} ${this.loading ? 'conecta-button--loading' : ''}`}
        disabled={this.disabled || this.loading}
        aria-busy={this.loading}
        aria-disabled={this.disabled || this.loading}
        onClick={this.handleClick}
      >
        {this.loading ? <span class="conecta-button__spinner" aria-label="Carregando"></span> : <slot name="prefix"></slot>}
        <slot></slot>
      </button>
    );
  }
}
