import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'UsernameGen';

  users = ['Harharhar','Raulraurau', 'Alisaliali'];
  private genUser: string;

  genFunc(name, email, pass){
    // var name = "Harsh";
    // var email = "xyz@abc.com";
    // var pass = "kvfsjbgrfga";

    var em = email.split('@');
    var em1 = em[0];
    var res = name.slice(0,3)+em1.slice(0,3)+pass.slice(0,3);

    if (this.users.includes(res)){
      console.log("in here!")
      res = "User name already exists";
    }

    this.genUser = res;

    // return name.slice(0,3)+em1.slice(0,3)+pass.slice(0,3);
}

  


  constructor() {
   
  }

  ngOnInit(){

  }


}
