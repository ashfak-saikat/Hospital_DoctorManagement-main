import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestListFrontComponent } from './labTestListFront.component';

describe('LabTestListFrontComponent', () => {
  let component: LabTestListFrontComponent;
  let fixture: ComponentFixture<LabTestListFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTestListFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
