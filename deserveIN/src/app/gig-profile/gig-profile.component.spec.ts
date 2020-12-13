import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigProfileComponent } from './gig-profile.component';

describe('GigProfileComponent', () => {
  let component: GigProfileComponent;
  let fixture: ComponentFixture<GigProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
