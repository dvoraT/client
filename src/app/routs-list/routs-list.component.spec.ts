import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutsListComponent } from './routs-list.component';

describe('RoutsListComponent', () => {
  let component: RoutsListComponent;
  let fixture: ComponentFixture<RoutsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
