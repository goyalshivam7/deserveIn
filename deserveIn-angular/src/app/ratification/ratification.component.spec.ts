import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatificationComponent } from './ratification.component';

describe('RatificationComponent', () => {
  let component: RatificationComponent;
  let fixture: ComponentFixture<RatificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
