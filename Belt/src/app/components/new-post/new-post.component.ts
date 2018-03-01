import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Post } from '../../models/post';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post: Post;

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  createPost(form: NgForm){
    this._dataService.addPost(this.post,
      (post) => {
        this._router.navigateByUrl('/dashboard');
      },
    (err) => {
      console.log('Something went wrong');
    })

  }

  clear(formData){
    formData.reset();
  }
}
