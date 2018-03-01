import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Answer } from '../../models/answer';
import { Post } from '../../models/post';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  post_id: String;
  answer: Answer;
  post: Post;

  constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe((params) => {
      this.post_id = params.get('id)')
    })
   }

  ngOnInit() {

  }

  createAnswer(form: NgForm){
    this._dataService.addAnswer(this.answer, (answer) => {
      this._router.navigateByUrl('/post');
    },
    (err) => {
      console.log("Error");
    })

  }

  clear(formData){
    formData.reset()
  }


}
