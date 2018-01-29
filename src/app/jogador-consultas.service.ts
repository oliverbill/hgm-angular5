import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppMessageService } from './app-message.service';
import { Jogador } from './jogador';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class JogadorConsultasService {

  private jogadorURL = 'api/jogadores';

  constructor(private http:HttpClient, private msgService:AppMessageService, ) { }

  buscarJogadores(term: string): Observable<Jogador[]>{
    if(!term.trim()){
      return of([]);
    }

    return this.http.get<Jogador[]>(`api/jogadores/?apelido=${term}`)
      .pipe(
        tap(_ => this.log(`jogadores encontrados para "${term}"`)),
        catchError(this.handleError<Jogador[]>('buscarJogadores',[]))
      );
  }

  getJogadorNo404<Data>(id: number): Observable<Jogador> {
    const url = `${this.jogadorURL}/?id=${id}`;
    return this.http.get<Jogador[]>(url)
      .pipe(
        map(jogadores => jogadores[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `carregados` : `jogador nao encontrado`;
          this.log(`${outcome} jogador id=${id}`);
        }),
        catchError(this.handleError<Jogador>(`getJogador id=${id}`))
      );
  }

  getJogadores (): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.jogadorURL)
      .pipe(
        tap(jogadores => this.log(`jogadores carregados`)),
          catchError(this.handleError('getJogadores', []))
      );
    //return of(JOGADORES);
  }

  getJogadorPorApelido(apelido:string): Observable<Jogador>{
    const url = `${this.jogadorURL}/${apelido}`;
    return this.http.get<Jogador>(url)
      .pipe(
        tap(_ => this.log(`carregou Jogador apelido=${apelido}`)),
          catchError(this.handleError<Jogador>(`getJogador apelido=${apelido}`))
      );
    //return of(JOGADORES.find(j => j.apelido === apelido));
  }      

  /** GET hero by id. Will 404 if id not found */
  getJogadorPorId(id:number): Observable<Jogador> {
    const url = `${this.jogadorURL}/${id}`;
    return this.http.get<Jogador>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Jogador>(`getHero id=${id}`))
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
