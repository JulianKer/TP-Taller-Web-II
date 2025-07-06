import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoItemActivoComponent } from './carrito-item-activo.component';

describe('CarritoItemActivoComponent', () => {
  let component: CarritoItemActivoComponent;
  let fixture: ComponentFixture<CarritoItemActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoItemActivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoItemActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
