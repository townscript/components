import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {config, TsControlValueAccessor} from '../../../../core';
import {CreditCardValidator} from 'angular-cc-library';

@Component({
  selector: 'ts-input-card',
  templateUrl: './ts-input-card.component.html',
  styleUrls: [
    // './ts-input-card.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsInputCardComponent),
    multi: true
  }]
})
export class TsInputCardComponent extends TsControlValueAccessor implements OnInit  {

  @Input() placeholder = 'Placeholder';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  private _inputCardValue: string;
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    super();
  }

  get inputCardValue(): string {
    return this._inputCardValue;
  }

  set inputCardValue(value: string) {
    this._inputCardValue = value;
    this.onChangePropagation(value);
  }

  ngOnInit() {
    this.form = this._fb.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]]
    });
  }

  writeValue(value: string): void {
    this.form.setValue({'creditCard': value});
    this.onChange();
  }

  onBlur = () => {
    this.onTouchedPropagation(this.inputCardValue);
  }

  onChange = () => {
    if (this.form.get('creditCard').valid) {
      this.inputCardValue = this.form.get('creditCard').value;
    } else {
      this.inputCardValue = undefined;
    }
  }
}
