import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTopContentComponent } from './login-top-content.component';

describe('LoginTopContentComponent', () => {
  let component: LoginTopContentComponent;
  let fixture: ComponentFixture<LoginTopContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTopContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
