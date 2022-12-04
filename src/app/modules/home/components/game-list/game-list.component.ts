import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDto } from '../../Models/game-dto';
import { CartService } from '../../services/cart.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  public games: GameDto[] = [];

  constructor(
    private gameService: GameService, 
    private router: Router, 
    private activeRoute: ActivatedRoute, 
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params.searchTerm){
        this.gameService.Search(params.searchTerm).subscribe(
          (result: GameDto[]) => (this.games = result));
      }
      else{
        this.gameService.GetGames().subscribe(
          (result: GameDto[]) => (this.games = result));
      }
    })
  }

  public NavToGameDetail(id: number){
    this.router.navigate(["/home/game/" + id])
  }

  public AddToCart(gameID: number){
    this.cartService.AddToCart(gameID);
  }

}
