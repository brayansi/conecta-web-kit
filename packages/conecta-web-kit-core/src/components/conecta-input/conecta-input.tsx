import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'conecta-input',
  styleUrl: 'conecta-input.scss',
  shadow: true,
})
export class ConectaInput {
  /**
   * Valor do input
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Placeholder do input
   */
  @Prop({ reflect: true }) placeholder: string = '';

  /**
   * Label do input
   */
  @Prop({ reflect: true }) label: string = '';

  /**
   * Tipo do input
   */
  @Prop({ reflect: true }) type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';

  /**
   * Se o input está desabilitado
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Se o input é obrigatório
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Tamanho do input
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Estado de erro
   */
  @Prop({ reflect: true }) error: boolean = false;

  /**
   * Mensagem de erro
   */
  @Prop({ reflect: true }) errorMessage: string = '';

  /**
   * Nome do input
   */
  @Prop({ reflect: true }) name: string = '';

  /**
   * ID do input
   */
  @Prop({ reflect: true }) inputId: string = `conecta-input-${inputIds++}`;

  @State() isFocused: boolean = false;

  /**
   * Evento emitido quando o valor muda
   */
  @Event() inputChange: EventEmitter<string>;

  /**
   * Evento emitido quando o input recebe foco
   */
  @Event() inputFocus: EventEmitter<FocusEvent>;

  /**
   * Evento emitido quando o input perde foco
   */
  @Event() inputBlur: EventEmitter<FocusEvent>;

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.inputChange.emit(this.value);
  };

  private handleFocus = (event: FocusEvent) => {
    this.isFocused = true;
    this.inputFocus.emit(event);
  };

  private handleBlur = (event: FocusEvent) => {
    this.isFocused = false;
    this.inputBlur.emit(event);
  };

  private getInputClasses = () => {
    return 'conecta-input__field';
  };

  private getWrapperClasses = () => {
    const classes = ['conecta-input__wrapper', `conecta-input__wrapper--${this.size}`];

    if (this.error) {
      classes.push('conecta-input__wrapper--error');
    }
    if (this.isFocused) {
      classes.push('conecta-input__wrapper--focused');
    }
    if (this.disabled) {
      classes.push('conecta-input__wrapper--disabled');
    }

    return classes.join(' ');
  };

  render() {
    return (
      <div class="conecta-input">
        {this.label && (
          <label htmlFor={this.inputId} class="conecta-input__label">
            {this.label}
            {this.required && <span class="conecta-input__required">*</span>}
          </label>
        )}
        <div class={this.getWrapperClasses()}>
          <slot name="prefix"></slot>
          <input
            id={this.inputId}
            name={this.name}
            type={this.type}
            placeholder={this.placeholder}
            value={this.value}
            disabled={this.disabled}
            required={this.required}
            class={this.getInputClasses()}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <slot name="suffix"></slot>
        </div>
        <div class="conecta-input__error">{this.error && this.errorMessage && this.errorMessage}</div>
      </div>
    );
  }
}

let inputIds = 0;
