import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMortalidadesComponent } from './reporte-mortalidades.component';

describe('ReporteMortalidadesComponent', () => {
  let component: ReporteMortalidadesComponent;
  let fixture: ComponentFixture<ReporteMortalidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteMortalidadesComponent]
    });
    fixture = TestBed.createComponent(ReporteMortalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
