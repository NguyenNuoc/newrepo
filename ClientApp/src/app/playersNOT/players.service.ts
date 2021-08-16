

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Player } from "./player";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private apiURL = "http://localhost:50016/api";  //  Here is the WRONG CODE 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<Player[]> {
//  return this.httpClient.get<Player[]>(this.apiURL + '/api/players') // WRONG because of this.apiURL
     return this.httpClient.get<Player[]>('/api/players') 
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getPlayer(id): Observable<Player> {
    return this.httpClient.get<Player>('api/players/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createPlayer(player): Observable<Player> {
    return this.httpClient.post<Player>('api/players/', JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updatePlayer(id, player): Observable<Player> {
    return this.httpClient.put<Player>('api/players/' + id, JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deletePlayer(id) {
    return this.httpClient.delete<Player>('api/players/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
