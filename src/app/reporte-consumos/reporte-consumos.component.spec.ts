import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteConsumosComponent } from './reporte-consumos.component';

describe('ReporteConsumosComponent', () => {
  let component: ReporteConsumosComponent;
  let fixture: ComponentFixture<ReporteConsumosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteConsumosComponent]
    });
    fixture = TestBed.createComponent(ReporteConsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
