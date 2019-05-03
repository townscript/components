import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInputTextComponent } from './ts-input-text.component';

describe('TsInputTextComponent', () => {
  let component: TsInputTextComponent;
  let fixture: ComponentFixture<TsInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
