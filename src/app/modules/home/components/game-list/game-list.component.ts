import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDto } from '../../Models/game-dto';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  public games: GameDto[] = [];

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.gameService.GetGames().subscribe(
     (result: GameDto[]) => (this.games = result));
     
  }

  public NavToGameDetail(id: number){
    this.router.navigate(["/home/game/" + id])
  }

}
