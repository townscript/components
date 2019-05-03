import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInputExpiryComponent } from './ts-input-expiry.component';

describe('TsInputExpiryComponent', () => {
  let component: TsInputExpiryComponent;
  let fixture: ComponentFixture<TsInputExpiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsInputExpiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsInputExpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
