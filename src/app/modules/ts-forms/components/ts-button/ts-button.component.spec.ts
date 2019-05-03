import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsButtonComponent } from './ts-button.component';

describe('TsButtonComponent', () => {
  let component: TsButtonComponent;
  let fixture: ComponentFixture<TsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
