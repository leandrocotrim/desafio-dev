import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnabLojaComponent } from './cnab-loja.component';

describe('CnabLojaComponent', () => {
  let component: CnabLojaComponent;
  let fixture: ComponentFixture<CnabLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnabLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnabLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
