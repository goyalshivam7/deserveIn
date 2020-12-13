import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gig-experience',
  templateUrl: './gig-experience.component.html',
  styleUrls: ['./gig-experience.component.css']
})
export class GigExperienceComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['']);
  }

}
