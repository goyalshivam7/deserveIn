import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame-works',
  templateUrl: './frame-works.component.html',
  styleUrls: ['./frame-works.component.css']
})
export class FrameWorksComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['validation']);
  }

}
