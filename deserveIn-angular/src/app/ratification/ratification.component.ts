import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ratification',
  templateUrl: './ratification.component.html',
  styleUrls: ['./ratification.component.css']
})
export class RatificationComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['gig-profile']);
  }
}
