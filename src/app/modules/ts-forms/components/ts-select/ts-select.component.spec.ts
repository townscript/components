import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsSelectComponent } from './ts-select.component';

describe('TsSelectComponent', () => {
  let component: TsSelectComponent;
  let fixture: ComponentFixture<TsSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
