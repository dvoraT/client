import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySingInComponent } from './delivery-sing-in.component';

describe('DeliverySingInComponent', () => {
  let component: DeliverySingInComponent;
  let fixture: ComponentFixture<DeliverySingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverySingInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
