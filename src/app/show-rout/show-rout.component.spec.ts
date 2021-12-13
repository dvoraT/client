import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoutComponent } from './show-rout.component';

describe('ShowRoutComponent', () => {
  let component: ShowRoutComponent;
  let fixture: ComponentFixture<ShowRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
