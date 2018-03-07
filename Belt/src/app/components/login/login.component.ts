import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser ={};
  errors = [];

  constructor(private _dataService: DataService, private _router: Router) {
   }

   ngOnInit() {
   }

   createUser(){
     this.errors = [];
     return this._dataService.createUser(this.newUser)
      .then(user => {
        console.log(user);
        if(user.errors){
          for(let key in user.errors){
            this.errors.push(user.errors[key].message)
          }
        }
        else{
          this._dataService.setCurrentUser(user);
          this._router.navigateByUrl('/dashboard');
        }
      })
      .catch(err => console.log(err));
    }
}
