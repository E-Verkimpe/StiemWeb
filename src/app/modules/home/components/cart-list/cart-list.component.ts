import { Component, OnInit } from '@angular/core';
import { CartOverviewDto } from '../../Models/CartOverview-dto';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart = {} as CartOverviewDto;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.GetGamesInCart();
  }

  GetGamesInCart(){
    this.cartService.GetGamesInCart().subscribe(
      (result: CartOverviewDto) => (this.cart = result));
  }

  RemoveSingleGame(id: number){
    this.cartService.RemoveSingleGame(id);
    this.GetGamesInCart();
  }

}
