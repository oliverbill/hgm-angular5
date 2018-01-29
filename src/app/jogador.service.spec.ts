import { TestBed, inject } from '@angular/core/testing';

import { JogadorService } from './jogador.service';

describe('JogadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogadorService]
    });
  });

  it('should be created', inject([JogadorService], (service: JogadorService) => {
    expect(service).toBeTruthy();
  }));
});
