import {ControlValueAccessor} from '@angular/forms';

export abstract class TsControlValueAccessor implements ControlValueAccessor {

  onChangePropagation: any = () => { };
  registerOnChange(fn: any): void {
    this.onChangePropagation = fn;
  }

  onTouchedPropagation: any = () => { };
  registerOnTouched(fn: any): void {
    this.onTouchedPropagation = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  abstract writeValue(obj: any): void;
}
