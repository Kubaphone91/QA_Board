import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Post } from '../../models/post';
import { Answer} from '../../models/answer';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: String;
  post;
  answers: Answer[] = [];

  constructor(private _dataService: DataService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    })
   }

  ngOnInit() {
   this._dataService.grabPost(this.id, (post) => {
     this.post = post;
   },
    (err) => {
      console.log(err.json());
    })
  }
}
