import { Jogador } from './jogador';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AppMessageService } from './app-message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { JogadorConsultasService } from './jogador-consultas.service';

@Injectable()
export class JogadorService {

  private jogadorURL = 'api/jogadores';

  constructor(private http: HttpClient,
              private msgService: AppMessageService,
              private jogConsultasService:JogadorConsultasService) 
  { }

  update(j:Jogador): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.jogadorURL, j, httpOptions)
      .pipe(
          tap(_ => this.log(`updated hero id=${j.id}`)),
          catchError(this.handleError<any>('updateHero'))
      );
  }

  insert(j:Jogador): Observable<Jogador>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Jogador>(this.jogadorURL, j, httpOptions)
      .pipe(
        tap((j: Jogador) => this.log(`jogador adicionado w/ id=${j.id}`)),
        catchError(this.handleError<Jogador>('insertJogador'))
      );
  }

  remove(j:Jogador | number): Observable<Jogador>{
    const id = typeof j === 'number' ? j : j.id;
    const url = `${this.jogadorURL}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Jogador>(url,httpOptions)
      .pipe(
        tap(_ => this.log(`jogador removido id=${id}`)),
          catchError(this.handleError<Jogador>('removeJogador'))
      );
  }

  private log(msg:string){
    this.msgService.add('JogadorService: '+msg);
  }

  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.msgService.add(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }
}
