/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@conecta.fit/conecta-web-kit-core/dist/components';

import { defineCustomElement as defineConectaButton } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-button.js';
import { defineCustomElement as defineConectaCard } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-card.js';
import { defineCustomElement as defineConectaCheckbox } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-checkbox.js';
import { defineCustomElement as defineConectaIcon } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-icon.js';
import { defineCustomElement as defineConectaInput } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-input.js';
import { defineCustomElement as defineConectaSelect } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-select.js';
import { defineCustomElement as defineConectaTag } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-tag.js';
import { defineCustomElement as defineConectaToggleIcon } from '@conecta.fit/conecta-web-kit-core/dist/components/conecta-toggle-icon.js';
@ProxyCmp({
  defineCustomElementFn: defineConectaButton,
  inputs: ['disabled', 'loading', 'size', 'type', 'variant']
})
@Component({
  selector: 'conecta-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'loading', 'size', 'type', 'variant'],
  outputs: ['buttonClick'],
})
export class ConectaButton {
  protected el: HTMLConectaButtonElement;
  @Output() buttonClick = new EventEmitter<CustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaButton extends Components.ConectaButton {
  /**
   * Evento emitido quando o botão é clicado
   */
  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineConectaCard,
  inputs: ['hasHover', 'variant']
})
@Component({
  selector: 'conecta-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasHover', 'variant'],
})
export class ConectaCard {
  protected el: HTMLConectaCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaCard extends Components.ConectaCard {}


@ProxyCmp({
  defineCustomElementFn: defineConectaCheckbox,
  inputs: ['checkboxId', 'checked', 'disabled', 'indeterminate', 'name', 'size', 'value', 'variant']
})
@Component({
  selector: 'conecta-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checkboxId', 'checked', 'disabled', 'indeterminate', 'name', 'size', 'value', 'variant'],
  outputs: ['checkboxChange', 'checkboxFocus', 'checkboxBlur'],
})
export class ConectaCheckbox {
  protected el: HTMLConectaCheckboxElement;
  @Output() checkboxChange = new EventEmitter<CustomEvent<boolean>>();
  @Output() checkboxFocus = new EventEmitter<CustomEvent<FocusEvent>>();
  @Output() checkboxBlur = new EventEmitter<CustomEvent<FocusEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaCheckbox extends Components.ConectaCheckbox {
  /**
   * Evento emitido quando o estado do checkbox muda
   */
  checkboxChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Evento emitido quando o checkbox recebe foco
   */
  checkboxFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Evento emitido quando o checkbox perde foco
   */
  checkboxBlur: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineConectaIcon,
  inputs: ['name', 'size', 'variant']
})
@Component({
  selector: 'conecta-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'size', 'variant'],
})
export class ConectaIcon {
  protected el: HTMLConectaIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaIcon extends Components.ConectaIcon {}


@ProxyCmp({
  defineCustomElementFn: defineConectaInput,
  inputs: ['disabled', 'error', 'errorMessage', 'helpText', 'inputId', 'label', 'name', 'placeholder', 'required', 'size', 'type', 'value']
})
@Component({
  selector: 'conecta-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'errorMessage', 'helpText', 'inputId', 'label', 'name', 'placeholder', 'required', 'size', 'type', 'value'],
  outputs: ['inputChange', 'inputFocus', 'inputBlur'],
})
export class ConectaInput {
  protected el: HTMLConectaInputElement;
  @Output() inputChange = new EventEmitter<CustomEvent<string>>();
  @Output() inputFocus = new EventEmitter<CustomEvent<FocusEvent>>();
  @Output() inputBlur = new EventEmitter<CustomEvent<FocusEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaInput extends Components.ConectaInput {
  /**
   * Evento emitido quando o valor muda
   */
  inputChange: EventEmitter<CustomEvent<string>>;
  /**
   * Evento emitido quando o input recebe foco
   */
  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Evento emitido quando o input perde foco
   */
  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineConectaSelect,
  inputs: ['disabled', 'error', 'errorMessage', 'helpText', 'label', 'name', 'options', 'placeholder', 'required', 'selectId', 'size', 'value']
})
@Component({
  selector: 'conecta-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'errorMessage', 'helpText', 'label', 'name', 'options', 'placeholder', 'required', 'selectId', 'size', 'value'],
  outputs: ['selectChange', 'selectFocus', 'selectBlur'],
})
export class ConectaSelect {
  protected el: HTMLConectaSelectElement;
  @Output() selectChange = new EventEmitter<CustomEvent<string>>();
  @Output() selectFocus = new EventEmitter<CustomEvent<FocusEvent>>();
  @Output() selectBlur = new EventEmitter<CustomEvent<FocusEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaSelect extends Components.ConectaSelect {
  /**
   * Emitido quando o valor muda
   */
  selectChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitido quando o select recebe foco
   */
  selectFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitido quando o select perde foco
   */
  selectBlur: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineConectaTag,
  inputs: ['size', 'variant']
})
@Component({
  selector: 'conecta-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'variant'],
})
export class ConectaTag {
  protected el: HTMLConectaTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaTag extends Components.ConectaTag {}


@ProxyCmp({
  defineCustomElementFn: defineConectaToggleIcon,
  inputs: ['active', 'disabled', 'name', 'readonly', 'size', 'variant']
})
@Component({
  selector: 'conecta-toggle-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'disabled', 'name', 'readonly', 'size', 'variant'],
  outputs: ['toggleChange'],
})
export class ConectaToggleIcon {
  protected el: HTMLConectaToggleIconElement;
  @Output() toggleChange = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ConectaToggleIcon extends Components.ConectaToggleIcon {
  /**
   * Evento emitido quando o estado do toggle muda
   */
  toggleChange: EventEmitter<CustomEvent<boolean>>;
}


