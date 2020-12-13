import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-introduction',
  templateUrl: './job-introduction.component.html',
  styleUrls: ['./job-introduction.component.css']
})
export class JobIntroductionComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['frame-works']);
  }

}
