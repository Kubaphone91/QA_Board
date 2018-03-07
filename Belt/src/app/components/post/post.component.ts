import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {
  question = { answers: [] };
  param_id: string;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    this._route.params.subscribe(param => {
      this.param_id = param.id;
    })
   }

  ngOnInit() {
    this.isLoggedIn();
    this.getQuestion();
  }

  getQuestion(){
    return this._dataService.grabPost(this.param_id)
      .then(question => {
        console.log(question)
        this.question = question;
      })
      .catch(err => console.log(err))
  }

  isLoggedIn(){
    if(this._dataService.getCurrentUser() == null){
      this._router.navigateByUrl('/login');
    }
  }

  logout(){
    this._dataService.logout();
    this._router.navigateByUrl('/login');
  }

  increaseLikes(id: string, idx: number){
    return this._dataService.increaseLikes(id)
      .then(answer => {
        this.question.answers[idx].likes++
      })
      .catch(err => console.log(err))
  }
}
