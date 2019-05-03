import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {config, TsControlValueAccessor} from '../../../../core';

@Component({
  selector: 'ts-input-cvc',
  templateUrl: './ts-input-cvc.component.html',
  styleUrls: [
    './ts-input-cvc.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsInputCvcComponent),
    multi: true
  }]
})
export class TsInputCvcComponent extends TsControlValueAccessor implements OnInit {

  @Input() placeholder = 'Placeholder';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  private _inputCVCValue: string;
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this._fb.group({
      ccCVC: ['', [<any>Validators.minLength(3), <any>Validators.maxLength(4)]]
    });
  }

  get inputCVCValue(): string {
    return this._inputCVCValue;
  }

  set inputCVCValue(value: string) {
    this._inputCVCValue = value;
    this.onChangePropagation(value);
  }

  writeValue(value: string): void {
    this.form.setValue({'ccCVC': value});
    this.onChange();
  }

  onBlur = () => {
    this.onTouchedPropagation(this.inputCVCValue);
  }

  onChange = () => {
    if (this.form.get('ccCVC').valid) {
      this.inputCVCValue = this.form.get('ccCVC').value;
    } else {
      this.inputCVCValue = undefined;
    }
  }

}
