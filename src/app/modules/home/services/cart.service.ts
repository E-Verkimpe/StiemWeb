import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartOverviewDto } from '../Models/CartOverview-dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = "Cart";

  constructor(private client: HttpClient, private router: Router) { }

  public AddToCart(gameID: number) {
    if (!this.IsLoggedIn()) {
      this.router.navigate(['/auth/login']);
    }
    else {
      this.client.post(`${environment.apiUrl}/${this.url}`, gameID).subscribe();
    }
  }

  public GetGamesInCart(): Observable<CartOverviewDto> {
    
    return this.client.get<CartOverviewDto>(`${environment.apiUrl}/${this.url}`);
  }

  public RemoveSingleGame(gameID: number) {
    this.client.delete(`${environment.apiUrl}/${this.url}/${gameID}`).subscribe();
  }

  private IsLoggedIn(): boolean {
    if (sessionStorage.getItem('accesToken') !== null) {
      return true;
    }
    else return false;
  }
}
