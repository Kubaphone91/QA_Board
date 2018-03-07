import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
//import { Post } from '../../models/post';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  currentUser = { _id: ''};
  newQuestion = { user: ''};
  errors = [];

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.currentUser = this._dataService.getCurrentUser();
  }

  createQuestion(){
    this.errors = [];
    this.newQuestion.user = this.currentUser._id;
    return this._dataService.addPost(this.newQuestion)
      .then(question => {
        if(question.errors){
          for(let key in question.errors){
            this.errors.push(question.errors[key].message);
          }
          console.log(this.errors);
        }
        this._router.navigateByUrl('/dashboard');
      })
      .catch(err => console.log(err));
  }

  logout(){
    this._dataService.logout();
    this._router.navigateByUrl('/login');
  }

  isLoggedIn(){
    if(this._dataService.getCurrentUser() == null){
      this._router.navigateByUrl('/login');
    }
  }
}
