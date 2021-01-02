import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['job-introduction']);
  }
}
