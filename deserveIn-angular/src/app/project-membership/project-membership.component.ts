import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-membership',
  templateUrl: './project-membership.component.html',
  styleUrls: ['./project-membership.component.css']
})
export class ProjectMembershipComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['rewards']);
  }

}
