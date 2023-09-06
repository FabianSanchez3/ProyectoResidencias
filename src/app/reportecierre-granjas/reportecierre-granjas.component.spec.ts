import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportecierreGranjasComponent } from './reportecierre-granjas.component';

describe('ReportecierreGranjasComponent', () => {
  let component: ReportecierreGranjasComponent;
  let fixture: ComponentFixture<ReportecierreGranjasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportecierreGranjasComponent]
    });
    fixture = TestBed.createComponent(ReportecierreGranjasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
