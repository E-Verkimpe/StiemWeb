import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeUser: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('accesToken') !== null){
      this.activeUser = true;
    }
  }

  Logout(){
    sessionStorage.removeItem('accesToken')
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });
  }
}
