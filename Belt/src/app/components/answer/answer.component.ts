import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
//import { Answer } from '../../models/answer';
//import { Post } from '../../models/post';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  newAnswer = {user: '', question: ''};
  param_id: string;
  question = { _id: ''};
  currentUser = { _id: ''};
  errors = [];

  constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe(param => {
      this.param_id = param.id;
    })
   }

  ngOnInit() {
    this.currentUser = this._dataService.getCurrentUser();
    this.getQuestion();
    this.isLoggedIn();
  }

  createAnswer(){
    this.errors = [];
    this.newAnswer.user = this.currentUser._id;
    this.newAnswer.question = this.question._id;
    console.log(this.question._id);
    return this._dataService.addAnswer(this.newAnswer)
      .then(answer => {
        if(answer.errors){
          for(let key in answer.errors){
            this.errors.push(answer.errors[key].message)
          }
        }
        else{
          this._router.navigateByUrl(`/view-question/${this.newAnswer.question}`);
        }
      })
      .catch(err => console.log(err));
  }

  isLoggedIn(){
    if(this._dataService.getCurrentUser() == null){
      this._router.navigateByUrl('/login');
    }
  }

  getQuestion(){
    return this._dataService.grabPost(this.param_id)
      .then(question => {
        console.log(question);
        this.question = question;
      })
      .catch(err => console.log(err));
  }

  logout(){
    this._dataService.logout();
    this._router.navigateByUrl('/login');
  }
}
