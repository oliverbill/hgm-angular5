import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelInicioEtapaComponent } from './painel-inicio-etapa.component';

describe('PainelInicioEtapaComponent', () => {
  let component: PainelInicioEtapaComponent;
  let fixture: ComponentFixture<PainelInicioEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelInicioEtapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelInicioEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
