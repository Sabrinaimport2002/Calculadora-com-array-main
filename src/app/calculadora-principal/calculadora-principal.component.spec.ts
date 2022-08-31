import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPrincipalComponent } from './calculadora-principal.component';

describe('CalculadoraPrincipalComponent', () => {
  let component: CalculadoraPrincipalComponent;
  let fixture: ComponentFixture<CalculadoraPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
