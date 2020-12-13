import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigExperienceComponent } from './gig-experience.component';

describe('GigExperienceComponent', () => {
  let component: GigExperienceComponent;
  let fixture: ComponentFixture<GigExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
