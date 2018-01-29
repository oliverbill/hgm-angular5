import { Component, OnInit } from '@angular/core';
import { Jogador } from '../jogador';
import { JogadorService } from '../jogador.service';
import { JogadorConsultasService } from '../jogador-consultas.service';

@Component({
  selector: 'app-etapa',
  templateUrl: './etapa.component.html',
  styleUrls: ['./etapa.component.css']
})
export class EtapaComponent implements OnInit {
  jogadores:Jogador[]=[];
  jogador:Jogador;
  MAX_JOGADORES:number = 1000;

  constructor(private jogConsultasService:JogadorConsultasService,
              private jogadorService:JogadorService) 
  { }

  ngOnInit() {
    this.getJogadores();
  }

  getJogadores(): void{
    this.jogConsultasService.getJogadores()
      .subscribe(jogadores => this.jogadores);
  }

  insertJogador(nome:string,idade:string,apelido:string,ap:string): void{
    if(!this.isInputValido(nome,idade,apelido,ap)){
      return;
    }
    //var id = Math.floor(Math.random() * this.MAX_JOGADORES) + 1;    
    this.jogadorService.insert( {nome:nome,idade:+idade,apelido:apelido,apartamentoBloco:ap} as Jogador )
      .subscribe(j => this.jogadores.push(j));
  }

  isInputValido(nome:string,idade:string,apelido:string,ap:string): boolean{
    nome = nome.trim();idade = idade.trim();apelido = apelido.trim();ap = ap.trim();
    if(!nome || !idade || !apelido || !ap){
      return false;
    }
    return true;
  }

  delete(jogador:Jogador):void{
    this.jogadores = this.jogadores.filter(j => j !== jogador);// remove da lista na tela
    this.jogadorService.remove(jogador).subscribe();
  }
}
