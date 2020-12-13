import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.routes.navigate(['ractification']);
  }

}
