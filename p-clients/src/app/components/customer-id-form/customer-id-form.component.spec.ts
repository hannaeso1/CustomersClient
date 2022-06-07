import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIDFormComponent } from './customer-id-form.component';

describe('CustomerIDFormComponent', () => {
  let component: CustomerIDFormComponent;
  let fixture: ComponentFixture<CustomerIDFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerIDFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerIDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
