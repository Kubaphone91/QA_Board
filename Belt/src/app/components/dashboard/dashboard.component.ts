import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Post } from '../../models/post';
import { User} from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[];
  user: User;

  constructor(private _dataService: DataService, private _router: Router) {
   }

  ngOnInit() {
    this._dataService.showAll((posts) => {
      this.posts = posts;
    },
    (err) => {
      console.log(err);
    });

  }
}
