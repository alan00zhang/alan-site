import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs = ["home", "about", "resume", "contact"];

  constructor() { }

  ngOnInit(): void {
  }

}
