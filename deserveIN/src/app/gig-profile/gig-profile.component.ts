import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gig-profile',
  templateUrl: './gig-profile.component.html',
  styleUrls: ['./gig-profile.component.css']
})
export class GigProfileComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['gig-experience']);
  }
}
