import { Component, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'conecta-select',
  styleUrl: 'conecta-select.scss',
  shadow: true,
})
export class ConectaSelect {
  /** Valor selecionado */
  @Prop({ mutable: true }) value: string = '';

  /** Label do select */
  @Prop({ reflect: true }) label: string = '';

  /** Placeholder exibido como opção desabilitada quando nenhum valor está selecionado */
  @Prop({ reflect: true }) placeholder: string = '';

  /** Nome do campo para formulários */
  @Prop({ reflect: true }) name: string = '';

  /** ID do select */
  @Prop({ reflect: true }) selectId: string = `conecta-select-${selectIds++}`;

  /** Se está desabilitado */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Se é obrigatório */
  @Prop({ reflect: true }) required: boolean = false;

  /** Tamanho do componente */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Estado de erro */
  @Prop({ reflect: true }) error: boolean = false;

  /** Mensagem de erro */
  @Prop({ reflect: true }) errorMessage: string = '';

  /** Mensagem de ajuda */
  @Prop({ reflect: true }) helpText: string = '';

  /** Lista de opções. Pode ser atribuída via propriedade (Array) ou string JSON. */
  @Prop() options: Array<{ label: string; value: string }> | string = [];

  @State() isFocused: boolean = false;
  @State() isOpen: boolean = false;
  @State() highlightedIndex: number = -1;
  @State() direction: 'down' | 'up' = 'down';

  /** Emitido quando o valor muda */
  @Event() selectChange: EventEmitter<string>;
  /** Emitido quando o select recebe foco */
  @Event() selectFocus: EventEmitter<FocusEvent>;
  /** Emitido quando o select perde foco */
  @Event() selectBlur: EventEmitter<FocusEvent>;

  private wrapperEl?: HTMLElement;
  private triggerEl?: HTMLElement;

  private parseOptions(): Array<{ label: string; value: string }> {
    const { options } = this;
    if (Array.isArray(options)) return options;
    if (typeof options === 'string' && options.trim()) {
      try {
        const parsed = JSON.parse(options);
        if (Array.isArray(parsed)) return parsed as Array<{ label: string; value: string }>;
      } catch {
        // Ignora erros de parsing e retorna array vazio
      }
    }
    return [];
  }

  private handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.selectChange.emit(this.value);
  };

  private toggleOpen = () => {
    if (this.disabled) return;
    const next = !this.isOpen;
    this.isOpen = next;
    if (next) {
      this.updateDirection();
      this.setInitialHighlight();
    }
  };

  private openDropdown = () => {
    if (this.disabled || this.isOpen) return;
    this.isOpen = true;
    this.updateDirection();
    this.setInitialHighlight();
  };

  private closeDropdown = () => {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.highlightedIndex = -1;
  };

  private setInitialHighlight() {
    const opts = this.parseOptions();
    const currentIndex = opts.findIndex(o => o.value === this.value);
    this.highlightedIndex = currentIndex >= 0 ? currentIndex : 0;
  }

  private updateDirection() {
    if (!this.wrapperEl) {
      this.direction = 'down';
      return;
    }
    const rect = this.wrapperEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    // Heurística simples: preferir abrir para baixo se houver pelo menos 240px, caso contrário abrir para cima
    const preferredHeight = 240;
    this.direction = spaceBelow >= preferredHeight || spaceBelow >= spaceAbove ? 'down' : 'up';
  }

  private onOptionSelect = (index: number) => {
    const opts = this.parseOptions();
    const option = opts[index];
    if (!option) return;
    this.value = option.value;
    this.selectChange.emit(this.value);
    this.closeDropdown();
    // Retornar foco ao trigger
    this.triggerEl?.focus();
  };

  private onKeyDown = (ev: KeyboardEvent) => {
    if (this.disabled) return;
    const opts = this.parseOptions();
    switch (ev.key) {
      case 'ArrowDown':
        ev.preventDefault();
        if (!this.isOpen) this.openDropdown();
        this.highlightedIndex = Math.min((this.highlightedIndex < 0 ? -1 : this.highlightedIndex) + 1, opts.length - 1);
        break;
      case 'ArrowUp':
        ev.preventDefault();
        if (!this.isOpen) this.openDropdown();
        this.highlightedIndex = Math.max((this.highlightedIndex < 0 ? 1 : this.highlightedIndex) - 1, 0);
        break;
      case 'Enter':
      case ' ': // Space
        if (this.isOpen) {
          ev.preventDefault();
          if (this.highlightedIndex >= 0) this.onOptionSelect(this.highlightedIndex);
        } else {
          ev.preventDefault();
          this.openDropdown();
        }
        break;
      case 'Escape':
        if (this.isOpen) {
          ev.preventDefault();
          this.closeDropdown();
        }
        break;
    }
  };

  @Listen('click', { target: 'document' })
  protected handleDocumentClick(ev: MouseEvent) {
    if (!this.isOpen) return;
    const path = ev.composedPath() as EventTarget[];
    if (this.wrapperEl && !path.includes(this.wrapperEl)) {
      this.closeDropdown();
    }
  }

  private handleFocus = (event: FocusEvent) => {
    this.isFocused = true;
    this.selectFocus.emit(event);
  };

  private handleBlur = (event: FocusEvent) => {
    this.isFocused = false;
    this.selectBlur.emit(event);
  };

  private getWrapperClasses = () => {
    const classes = ['conecta-select__wrapper', `conecta-select__wrapper--${this.size}`];
    if (this.error) classes.push('conecta-select__wrapper--error');
    if (this.isFocused) classes.push('conecta-select__wrapper--focused');
    if (this.disabled) classes.push('conecta-select__wrapper--disabled');
    return classes.join(' ');
  };

  render() {
    const options = this.parseOptions();

    return (
      <div class="conecta-select">
        {this.label && (
          <label htmlFor={this.selectId} class="conecta-select__label">
            {this.label}
            {this.required && <span class="conecta-select__required">*</span>}
          </label>
        )}
        <div class={this.getWrapperClasses()} ref={el => (this.wrapperEl = el as HTMLElement)}>
          <slot name="prefix"></slot>
          {/* Trigger visual acessível */}
          <div
            class="conecta-select__field"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={this.isOpen ? 'true' : 'false'}
            aria-controls={`${this.selectId}-listbox`}
            aria-disabled={this.disabled ? 'true' : 'false'}
            tabindex={this.disabled ? -1 : 0}
            onClick={this.toggleOpen}
            onMouseDown={ev => {
              if (this.disabled) {
                ev.preventDefault();
                ev.stopPropagation();
              }
            }}
            onKeyDown={this.onKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            ref={el => (this.triggerEl = el as HTMLElement)}
          >
            <span class="conecta-select__value">{this.value ? options.find(o => o.value === this.value)?.label || this.value : this.placeholder || ''}</span>
            {/* Select nativo oculto para formulários */}
            <select id={this.selectId} name={this.name} disabled={this.disabled} required={this.required} onInput={this.handleChange} onChange={this.handleChange} class="conecta-select__native" tabindex={-1} aria-hidden="true">
              {this.placeholder && (
                <option value="" disabled hidden selected={this.value === ''}>
                  {this.placeholder}
                </option>
              )}
              {options.map(opt => (
                <option value={opt.value} selected={this.value === opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {/* Dropdown customizado */}
          {this.isOpen && (
            <div
              id={`${this.selectId}-listbox`}
              role="listbox"
              class={{
                'conecta-select__dropdown': true,
                'conecta-select__dropdown--up': this.direction === 'up',
                'conecta-select__dropdown--down': this.direction === 'down',
              }}
            >
              {options.map((opt, index) => {
                const selected = this.value === opt.value;
                const highlighted = index === this.highlightedIndex;
                return (
                  <div
                    role="option"
                    class={{
                      'conecta-select__option': true,
                      'conecta-select__option--selected': selected,
                      'conecta-select__option--highlighted': highlighted,
                    }}
                    aria-selected={selected ? 'true' : 'false'}
                    onMouseDown={e => e.preventDefault()}
                    onClick={() => this.onOptionSelect(index)}
                  >
                    {opt.label}
                  </div>
                );
              })}
            </div>
          )}
          <span class="conecta-select__chevron" aria-hidden="true">
            <conecta-icon name="chevron-down" size="large"></conecta-icon>
          </span>
        </div>
        {this.error && this.errorMessage && <div class="conecta-select__error">{this.errorMessage}</div>}
        {!this.error && this.helpText && <div class="conecta-select__help">{this.helpText}</div>}
      </div>
    );
  }
}

let selectIds = 0;
