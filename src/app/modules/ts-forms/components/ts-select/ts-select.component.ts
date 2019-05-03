import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {config, TsControlValueAccessor} from '../../../../core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ts-select',
  templateUrl: './ts-select.component.html',
  styleUrls: [
    // './ts-select.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsSelectComponent),
    multi: true
  }]
})
export class TsSelectComponent extends TsControlValueAccessor implements OnInit {
  @Input() placeholder = 'Placeholder';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  @Input() options: Array<Option>;
  private _selectValue: string;
  @Input() modelObject = false;
  @Input() disabled = false;

  get selectValue(): string {
    return this._selectValue;
  }

  set selectValue(value: string) {
    this._selectValue = value;
    this.onChangePropagation(value);
  }

  ngOnInit() {
  }

  writeValue(value: string): void {
    this.selectValue = value;
  }

  onBlur = () => {
    this.onTouchedPropagation(this.selectValue);
  }
}
export interface Option {
  text: string;
  value: any;
}
