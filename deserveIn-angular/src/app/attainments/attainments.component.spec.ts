import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttainmentsComponent } from './attainments.component';

describe('AttainmentsComponent', () => {
  let component: AttainmentsComponent;
  let fixture: ComponentFixture<AttainmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttainmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttainmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
