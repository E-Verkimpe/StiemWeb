import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDto } from '../../Models/game-dto';
import { CartService } from '../../services/cart.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  public gameId: number = 0;

  public game = {} as GameDto;

  constructor(private service: GameService, private route: ActivatedRoute, private cartService: CartService) {}
  

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = params["id"];
    });

    this.service.GetSingleGame(this.gameId).subscribe(
      (result: GameDto) => (this.game = result),
      (e: Error) => console.error(e.message),
      );
  }

  public AddToCart(id: number){
    this.cartService.AddToCart(id);
  }

}
