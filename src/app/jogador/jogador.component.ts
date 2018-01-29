import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../jogador.service';
import { Jogador } from '../jogador';
import { JogadorConsultasService } from '../jogador-consultas.service';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {
  jogadores: Jogador[];

  constructor(private jogadorConsultasService:JogadorConsultasService) { }
  
  ngOnInit() {
    this.getJogadores();
  }

  getJogadores():void{
    this.jogadorConsultasService.getJogadores()
        .subscribe(jogadores => this.jogadores = jogadores);
  }
}
