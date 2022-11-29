import { Component, OnInit } from '@angular/core';
import { GameDto } from '../../Models/game-dto';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  public games: GameDto[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.GetGames().subscribe(
     (result: GameDto[]) => (this.games = result));
     
  }

}
