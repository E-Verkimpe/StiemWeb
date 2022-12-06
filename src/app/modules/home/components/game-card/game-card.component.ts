import { Component, Input, OnInit } from '@angular/core';
import { GameDto } from '../../Models/game-dto';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game = {} as GameDto;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public AddToCart(gameID: number){
    this.cartService.AddToCart(gameID);
  }
}
