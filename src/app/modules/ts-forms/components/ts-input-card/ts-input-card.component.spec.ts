import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInputCardComponent } from './ts-input-card.component';

describe('TsInputCardComponent', () => {
  let component: TsInputCardComponent;
  let fixture: ComponentFixture<TsInputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsInputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
