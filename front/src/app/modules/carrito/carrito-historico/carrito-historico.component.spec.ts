import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoHistoricoComponent } from './carrito-historico.component';

describe('CarritoHistoricoComponent', () => {
  let component: CarritoHistoricoComponent;
  let fixture: ComponentFixture<CarritoHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoHistoricoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
