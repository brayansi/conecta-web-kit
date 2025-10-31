import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'conecta-input[type=text], conecta-input[type=email], conecta-input[type=password], conecta-input[type=number], conecta-input[type=tel], conecta-input[type=url], conecta-select',
  host: {
    '(inputChange)': 'handleChangeEvent($event.target?.["value"])',
    '(selectChange)': 'handleChangeEvent($event.target?.["value"])'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
