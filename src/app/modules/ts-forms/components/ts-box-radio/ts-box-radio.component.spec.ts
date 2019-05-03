import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsBoxRadioComponent } from './ts-box-radio.component';

describe('TsBoxRadioComponent', () => {
  let component: TsBoxRadioComponent;
  let fixture: ComponentFixture<TsBoxRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsBoxRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsBoxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
