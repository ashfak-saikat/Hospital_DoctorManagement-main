import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAmbulanceListComponent } from './adminAmbulanceList.component';

describe('AdminAmbulanceListComponent', () => {
  let component: AdminAmbulanceListComponent;
  let fixture: ComponentFixture<AdminAmbulanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAmbulanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAmbulanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
