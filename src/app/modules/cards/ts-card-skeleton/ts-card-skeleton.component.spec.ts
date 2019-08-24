import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsCardSkeletonComponent } from './ts-card-skeleton.component';

describe('TsCardSkeletonComponent', () => {
  let component: TsCardSkeletonComponent;
  let fixture: ComponentFixture<TsCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
