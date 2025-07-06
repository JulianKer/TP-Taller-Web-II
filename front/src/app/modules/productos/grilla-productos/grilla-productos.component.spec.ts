import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaProductosComponent } from './grilla-productos.component';

describe('GrillaProductosComponent', () => {
  let component: GrillaProductosComponent;
  let fixture: ComponentFixture<GrillaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrillaProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrillaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
