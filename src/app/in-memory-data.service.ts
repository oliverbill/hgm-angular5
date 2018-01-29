import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Jogador } from './jogador';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const JOGADORES: Jogador[] = [
      { id:1,nome:'William Alves',apelido:'Bill',idade:34,apartamentoBloco:'183 C1',endereco:null} ,
      { id:2,nome:'Alexandre Le',apelido:'Goiano',idade:42,apartamentoBloco:'211 A1',endereco:null} ,
      { id:3,nome:'Alexandre',apelido:'Miseravi',idade:35,apartamentoBloco:'192 A2',endereco:null} ,
      { id:4,nome:'Guilherme',apelido:'Gui',idade:33,apartamentoBloco:'11 C1',endereco:null} ,
    ];

    return JOGADORES;
  }
}
