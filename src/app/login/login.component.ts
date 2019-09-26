import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  page: String = "home"
  constructor() { }

  showLogin(){
    this.page = "login";
  }

  showSignup(){
    this.page = "signup";
  }

  ngOnInit() {
  }

}
