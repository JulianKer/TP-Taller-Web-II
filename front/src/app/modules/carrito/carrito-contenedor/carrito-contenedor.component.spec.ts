import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoContenedorComponent } from './carrito-contenedor.component';

describe('CarritoContenedorComponent', () => {
  let component: CarritoContenedorComponent;
  let fixture: ComponentFixture<CarritoContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoContenedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
