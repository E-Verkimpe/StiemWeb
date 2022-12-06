import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameDto } from '../Models/game-dto';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url = "Game";

  constructor(private client: HttpClient) { }

  public GetGames(): Observable<GameDto[]>{
    return this.client.get<GameDto[]>(`${environment.apiUrl}/${this.url}`)
  }

  public Search(term: string): Observable<GameDto[]>{
    return this.client.get<GameDto[]>(`${environment.apiUrl}/${this.url}/search/${term}`)
  }

  public GetGamesByGenre(genre: string): Observable<GameDto[]>{
    return this.client.get<GameDto[]>(`${environment.apiUrl}/${this.url}/genre/${genre}`)
  }

  public GetSingleGame(id: number): Observable<GameDto>{
    return this.client.get<GameDto>(`${environment.apiUrl}/${this.url}/${id}`)
  }

}
