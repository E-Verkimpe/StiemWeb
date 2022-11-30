import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/login-dto';
import { TokenDto } from '../models/token-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient, private router: Router) { }

  login(model: LoginDto) {
    return this.client.post<TokenDto>(`${environment.apiUrl}/auth/login`, model).pipe(
      tap((token) => {
        sessionStorage.setItem('accesToken', token.token);
        this.router.navigate(['']);
      })
    );

  }

}
