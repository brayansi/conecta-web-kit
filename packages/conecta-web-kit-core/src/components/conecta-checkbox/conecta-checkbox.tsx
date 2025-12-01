import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'conecta-checkbox',
  styleUrl: 'conecta-checkbox.scss',
  shadow: true,
})
export class ConectaCheckbox {
  /**
   * Se o checkbox está marcado
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  /**
   * Se o checkbox está em estado indeterminado
   */
  @Prop({ mutable: true, reflect: true }) indeterminate: boolean = false;

  /**
   * Se o checkbox está desabilitado
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Nome do checkbox
   */
  @Prop({ reflect: true }) name: string = '';

  /**
   * Valor do checkbox
   */
  @Prop({ reflect: true }) value: string = '';

  /**
   * Tamanho do checkbox
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Variante do checkbox
   */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'neutral' = 'primary';

  /**
   * ID do checkbox
   */
  @Prop({ reflect: true }) checkboxId: string = `conecta-checkbox-${checkboxIds++}`;

  /**
   * Evento emitido quando o estado do checkbox muda
   */
  @Event() checkboxChange: EventEmitter<boolean>;

  /**
   * Evento emitido quando o checkbox recebe foco
   */
  @Event() checkboxFocus: EventEmitter<FocusEvent>;

  /**
   * Evento emitido quando o checkbox perde foco
   */
  @Event() checkboxBlur: EventEmitter<FocusEvent>;

  private handleChange = (event: Event) => {
    if (!this.disabled) {
      const target = event.target as HTMLInputElement;
      this.checked = target.checked;
      this.indeterminate = false; // Reset indeterminate when user interacts
      this.checkboxChange.emit(this.checked);
    }
  };

  private handleFocus = (event: FocusEvent) => {
    this.checkboxFocus.emit(event);
  };

  private handleBlur = (event: FocusEvent) => {
    this.checkboxBlur.emit(event);
  };

  private getCheckboxClasses = () => {
    const classes = ['conecta-checkbox__box', `conecta-checkbox__box--${this.size}`, `conecta-checkbox__box--${this.variant}`];

    if (this.checked) classes.push('conecta-checkbox__box--checked');
    if (this.indeterminate) classes.push('conecta-checkbox__box--indeterminate');
    if (this.disabled) classes.push('conecta-checkbox__box--disabled');

    return classes.join(' ');
  };

  render() {
    return (
      <div class="conecta-checkbox">
        <input
          id={this.checkboxId}
          name={this.name}
          type="checkbox"
          value={this.value}
          checked={this.checked}
          indeterminate={this.indeterminate}
          disabled={this.disabled}
          class="conecta-checkbox__input"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <label htmlFor={this.checkboxId} class="conecta-checkbox__label">
          <span class={this.getCheckboxClasses()}>
            {this.checked && !this.indeterminate && (
              <svg class="conecta-checkbox__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            )}
            {this.indeterminate && (
              <svg class="conecta-checkbox__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            )}
          </span>
          <slot></slot>
        </label>
      </div>
    );
  }
}

let checkboxIds = 0;
