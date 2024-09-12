import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAmbulanceDetailComponent } from './adminAmbulanceDetail.component';

describe('AdminAmbulanceDetailComponent', () => {
  let component: AdminAmbulanceDetailComponent;
  let fixture: ComponentFixture<AdminAmbulanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAmbulanceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAmbulanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
