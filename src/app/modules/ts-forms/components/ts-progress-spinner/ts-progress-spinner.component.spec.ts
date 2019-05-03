import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsProgressSpinnerComponent } from './ts-progress-spinner.component';

describe('TsProgressSpinnerComponent', () => {
  let component: TsProgressSpinnerComponent;
  let fixture: ComponentFixture<TsProgressSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsProgressSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
