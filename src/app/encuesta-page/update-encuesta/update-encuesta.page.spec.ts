import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEncuestaPage } from './update-encuesta.page';

describe('UpdateEncuestaPage', () => {
  let component: UpdateEncuestaPage;
  let fixture: ComponentFixture<UpdateEncuestaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEncuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
