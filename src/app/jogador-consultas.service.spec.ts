import { TestBed, inject } from '@angular/core/testing';

import { JogadorConsultasService } from './jogador-consultas.service';

describe('JogadorConsultasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogadorConsultasService]
    });
  });

  it('should be created', inject([JogadorConsultasService], (service: JogadorConsultasService) => {
    expect(service).toBeTruthy();
  }));
});
