import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private _dataService: DataService, private _router: Router) {
   }

   ngOnInit() {
   //  this.user = new User();
   //  if(this._dataService.currentUser){
   //    this._router.navigateByUrl('/dashboard');
   //  }
   }

   onSubmit(){
     this._dataService.login(this.user, (user) => {
       this._router.navigateByUrl('/dashboard');
     },
    (err) => {
      console.log(err);
    });
    this.user = new User();
   }


}
