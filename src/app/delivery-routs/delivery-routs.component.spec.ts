import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRoutsComponent } from './delivery-routs.component';

describe('DeliveryRoutsComponent', () => {
  let component: DeliveryRoutsComponent;
  let fixture: ComponentFixture<DeliveryRoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryRoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
