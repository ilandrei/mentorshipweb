import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListingComponent } from './display-listing.component';

describe('DisplayListingComponent', () => {
  let component: DisplayListingComponent;
  let fixture: ComponentFixture<DisplayListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
