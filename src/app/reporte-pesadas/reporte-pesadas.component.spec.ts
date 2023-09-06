import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePesadasComponent } from './reporte-pesadas.component';

describe('ReportePesadasComponent', () => {
  let component: ReportePesadasComponent;
  let fixture: ComponentFixture<ReportePesadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportePesadasComponent]
    });
    fixture = TestBed.createComponent(ReportePesadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
