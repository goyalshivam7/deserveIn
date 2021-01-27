import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetStandardComponent } from './meet-standard.component';

describe('MeetStandardComponent', () => {
  let component: MeetStandardComponent;
  let fixture: ComponentFixture<MeetStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
