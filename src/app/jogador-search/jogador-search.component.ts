import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Jogador }  from '../jogador';
import { JogadorService } from '../jogador.service';
import { JogadorConsultasService } from '../jogador-consultas.service';

@Component({
  selector: 'app-jogador-search',
  templateUrl: './jogador-search.component.html',
  styleUrls: ['./jogador-search.component.css']
})
export class JogadorSearchComponent implements OnInit {
  jogadores$: Observable<Jogador[]>;
  private searchTerms = new Subject<string>(); // stream de varios Observables

  constructor(private jogadorConsultasService:JogadorConsultasService) 
  { }

  // Adiciona um termo ao stream de Observable
  buscar(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.jogadores$ = this.searchTerms.pipe(
      // waits until the flow of new string events pauses for 300 milliseconds 
      // before passing along the latest string. You'll never make requests more frequently than 300ms.
      debounceTime(300),

      // ensures that a request is sent only if the filter text changed.
      distinctUntilChanged(),

      //  calls the search service for each search term that makes it through debounce 
      // and distinctUntilChanged. It cancels and discards previous search observables, 
      // returning only the latest search service observable (ultimo HTTP GET result).
      switchMap((term: string) => this.jogadorConsultasService.buscarJogadores(term)),
    );
  }
}
