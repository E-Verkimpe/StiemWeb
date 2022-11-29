import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  public gameId: number = 0;

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.gameId = params["id"];
    });
    }
  

  ngOnInit(): void {
  }

}
