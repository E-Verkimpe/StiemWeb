import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  @Input() title: string = "Not found";
  @Input() message: string = "Sorry, the data couldn't be loaded. Please try again later"
  @Input() buttonText: string = "Home"
  @Input() visible: boolean = false;
  @Input() routerLinkTo: string = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
