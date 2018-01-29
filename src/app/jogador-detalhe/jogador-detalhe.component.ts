import { Component, OnInit, Input } from '@angular/core';
import { Jogador } from '../jogador';
import { ActivatedRoute } from '@angular/router';
import { JogadorService } from '../jogador.service';
import { Location } from '@angular/common';
import { JogadorConsultasService } from '../jogador-consultas.service';

@Component({
  selector: 'app-jogador-detalhe',
  templateUrl: './jogador-detalhe.component.html',
  styleUrls: ['./jogador-detalhe.component.css']
})
export class JogadorDetalheComponent implements OnInit {  
  @Input() jogador: Jogador;

  constructor(private rota: ActivatedRoute,
              private jogadorConsultasService: JogadorConsultasService,
              private jogadorService: JogadorService,
              private location: Location) 
  {}

  ngOnInit() {
    this.getJogador();
  }

  getJogador():void{
    const id = +this.rota.snapshot.paramMap.get('id');
    this.jogadorConsultasService.getJogadorPorId(id)
      .subscribe(jogador => this.jogador = jogador);
  }

  voltar(): void {
    this.location.back();
  }

  salvar(): void{
    this.jogadorService.update(this.jogador)
      .subscribe(() => this.voltar());
  }
}
