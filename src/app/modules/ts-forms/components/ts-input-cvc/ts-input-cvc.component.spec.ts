import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInputCvcComponent } from './ts-input-cvc.component';

describe('TsInputCvcComponent', () => {
  let component: TsInputCvcComponent;
  let fixture: ComponentFixture<TsInputCvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsInputCvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsInputCvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
