import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoActivoComponent } from './carrito-activo.component';

describe('CarritoActivoComponent', () => {
  let component: CarritoActivoComponent;
  let fixture: ComponentFixture<CarritoActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoActivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
