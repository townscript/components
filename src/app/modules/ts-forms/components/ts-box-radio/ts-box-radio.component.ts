import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TsControlValueAccessor} from '../../../../core';

@Component({
  selector: 'ts-box-radio',
  templateUrl: './ts-box-radio.component.html',
  styleUrls: ['./ts-box-radio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsBoxRadioComponent),
    multi: true
  }]
})
export class TsBoxRadioComponent extends TsControlValueAccessor implements OnInit {

  @Input() disabled = false;
  @Input() value: String;
  @Input() text = this.value;
  private _selectedValue: String;
  @Input() imageSource: String;
  @Input() color = '#999999';

  ngOnInit() {
  }

  get selectedValue(): String {
    return this._selectedValue;
  }

  set selectedValue(value: String) {
    this._selectedValue = value;
    this.onChangePropagation(value);
    this.onTouchedPropagation(value);
  }

  writeValue(value: string): void {
    this.selectedValue = value;
  }
}
