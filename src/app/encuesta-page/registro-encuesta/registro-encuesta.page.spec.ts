import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEncuestaPage } from './registro-encuesta.page';

describe('RegistroEncuestaPage', () => {
  let component: RegistroEncuestaPage;
  let fixture: ComponentFixture<RegistroEncuestaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEncuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
