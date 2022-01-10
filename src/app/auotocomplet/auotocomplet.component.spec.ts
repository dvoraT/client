import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuotocompletComponent } from './auotocomplet.component';

describe('AuotocompletComponent', () => {
  let component: AuotocompletComponent;
  let fixture: ComponentFixture<AuotocompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuotocompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuotocompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
