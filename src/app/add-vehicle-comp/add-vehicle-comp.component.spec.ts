import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleCompComponent } from './add-vehicle-comp.component';

describe('AddVehicleCompComponent', () => {
  let component: AddVehicleCompComponent;
  let fixture: ComponentFixture<AddVehicleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
