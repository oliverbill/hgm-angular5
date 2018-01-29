import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorDetalheComponent } from './jogador-detalhe.component';

describe('JogadorDetalheComponent', () => {
  let component: JogadorDetalheComponent;
  let fixture: ComponentFixture<JogadorDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
