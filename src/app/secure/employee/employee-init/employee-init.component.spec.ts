import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInitComponent } from './employee-init.component';

describe('EmployeeInitComponent', () => {
  let component: EmployeeInitComponent;
  let fixture: ComponentFixture<EmployeeInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
