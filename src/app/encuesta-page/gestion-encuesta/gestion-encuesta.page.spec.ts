import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionEncuestaPage } from './gestion-encuesta.page';

describe('GestionEncuestaPage', () => {
  let component: GestionEncuestaPage;
  let fixture: ComponentFixture<GestionEncuestaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEncuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
