import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email: string;
 password: string;

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.email, this.password);
    console.log(this.email);
    this.router.navigate(['']);
  }

  onSignInWithGoogle() {
    this.authService.googleSignin().then(() => {
      this.router.navigate(['']);
    }).catch((err) => {
      console.log(err);
    });
  }
  onLogOut() {
    this.authService.logout().then(() => {
      this.router.navigate(['']);
    });
  }
}

