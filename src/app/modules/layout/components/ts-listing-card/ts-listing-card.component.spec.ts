import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsListingCardComponent } from './ts-listing-card.component';

describe('TsListingCardComponent', () => {
  let component: TsListingCardComponent;
  let fixture: ComponentFixture<TsListingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsListingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
