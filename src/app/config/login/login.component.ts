import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private login;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    // this.login = new Login();
    this.login = {
      username: 'admin',
      password: 'P@ssw0rd'
    };
  }

  @ViewChild('loginForm') loginForm: NgForm;

  ngOnInit() {

  }

  doLogin() {
    // localStorage.setItem('token', this.login);
    // this.router.navigate(['property-list']);
    // console.log(this.login);
    if ((this.login.username !== '') && (this.login.password !== '')) {
      this.loginService.doLogin(this.login).subscribe((res) => {
        console.log(res);
        if (res.id) {
          localStorage.setItem('token', res.id);
          this.router.navigate(['property-list']);
        } else {

        }
      });
    }
  }

}
