import { Component, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'conecta-toggle-icon',
  styleUrl: 'conecta-toggle-icon.scss',
  shadow: true,
})
export class ConectaToggleIcon {
  /** Nome do ícone do Lucide */
  @Prop({ reflect: true }) name: string;

  /** Variante quando ativo */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'neutral' = 'primary';

  /** Tamanho do toggle */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Estado ativo do toggle */
  @Prop({ mutable: true }) active: boolean = false;

  /** Se o toggle está desabilitado */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Se o toggle é somente leitura (não alterna estado) */
  @Prop({ reflect: true }) readonly: boolean = false;

  /** Evento emitido quando o estado do toggle muda */
  @Event() toggleChange: EventEmitter<boolean>;

  private handleClick = () => {
    if (this.disabled || this.readonly) return;
    this.active = !this.active;
    this.toggleChange.emit(this.active);
  };

  @Listen('keydown')
  onKeyDown(ev: KeyboardEvent) {
    if (this.disabled || this.readonly) return;
    if (ev.key === ' ' || ev.key === 'Enter') {
      ev.preventDefault();
      this.handleClick();
    }
  }

  private getClasses() {
    const classes = ['conecta-toggle-icon', `conecta-toggle-icon--${this.size}`, `conecta-toggle-icon--${this.variant}`];

    if (this.active) classes.push('conecta-toggle-icon--active');
    if (this.disabled) classes.push('conecta-toggle-icon--disabled');
    if (this.readonly) classes.push('conecta-toggle-icon--readonly');

    return classes.join(' ');
  }

  private mapIconSize(): 'small' | 'medium' | 'large' | 'xlarge' {
    switch (this.size) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'medium';
    }
  }

  render() {
    if (!this.name) return null;

    return (
      <div class={this.getClasses()} onClick={this.handleClick} role="button" tabindex={this.disabled ? -1 : 0} aria-pressed={this.active} aria-disabled={this.disabled} aria-readonly={this.readonly ? 'true' : 'false'}>
        <div class="conecta-toggle-icon__background"></div>
        <conecta-icon class="conecta-toggle-icon__icon" name={this.name} size={this.mapIconSize()}></conecta-icon>
      </div>
    );
  }
}
