import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentedVehicleComponent } from './view-rented-vehicle.component';

describe('ViewRentedVehicleComponent', () => {
  let component: ViewRentedVehicleComponent;
  let fixture: ComponentFixture<ViewRentedVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRentedVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRentedVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
