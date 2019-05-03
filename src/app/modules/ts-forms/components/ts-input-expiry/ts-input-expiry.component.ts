import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {config, TsControlValueAccessor} from '../../../../core';
import {CreditCardValidator} from 'angular-cc-library';

@Component({
  selector: 'ts-input-expiry',
  templateUrl: './ts-input-expiry.component.html',
  styleUrls: [
    // './ts-input-expiry.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsInputExpiryComponent),
    multi: true
  }]
})
export class TsInputExpiryComponent extends TsControlValueAccessor implements OnInit {

  @Input() placeholder = 'Placeholder';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  private _inputExpiryValue: string;
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this._fb.group({
      ccExpiry: ['', [<any>CreditCardValidator.validateExpDate]]
    });
  }

  get inputExpiryValue(): string {
    return this._inputExpiryValue;
  }

  set inputExpiryValue(value: string) {
    this._inputExpiryValue = value;
    this.onChangePropagation(value);
  }

  writeValue(value: string): void {
    this.form.setValue({'ccExpiry': value});
    this.onChange();
  }

  onBlur = () => {
    this.onTouchedPropagation(this.inputExpiryValue);
  }

  onChange = () => {
    if (this.form.get('ccExpiry').valid) {
      this.inputExpiryValue = this.form.get('ccExpiry').value;
    } else {
      this.inputExpiryValue = undefined;
    }
  }

}
