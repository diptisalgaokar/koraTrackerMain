import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureInitComponent } from './secure-init.component';

describe('SecureInitComponent', () => {
  let component: SecureInitComponent;
  let fixture: ComponentFixture<SecureInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
