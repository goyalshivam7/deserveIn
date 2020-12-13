import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attainments',
  templateUrl: './attainments.component.html',
  styleUrls: ['./attainments.component.css']
})
export class AttainmentsComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['project-membership']);
  }

}
