import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInAsComponent } from './sing-in-as.component';

describe('SingInAsComponent', () => {
  let component: SingInAsComponent;
  let fixture: ComponentFixture<SingInAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
