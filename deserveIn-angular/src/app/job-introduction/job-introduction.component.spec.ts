import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIntroductionComponent } from './job-introduction.component';

describe('JobIntroductionComponent', () => {
  let component: JobIntroductionComponent;
  let fixture: ComponentFixture<JobIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
