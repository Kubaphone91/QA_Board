import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from '@angular/router';

//import 'rxjs/operator/toPromise';
//import 'rxjs/add/operator/map';
import { User } from '../models/user';
import { Post } from '../models/post';
import { Answer } from '../models/answer';


@Injectable()
export class DataService {
  user: User;
  currentUser: User;

  post: Post;
  answer: Answer;
  posts: Post[] = [];
  answers: Answer[];

  constructor(private _http: Http, private _router: Router, private _route: ActivatedRoute){
    this.posts = [];
  }

  login(user: User, callback, errorback){
    this._http.post('/login', user)
      .subscribe((res) => {
        const user = res.json();
        this.currentUser = user;
        callback(this.getCurrentUser);
      },
    (err) => {
      errorback();
    })
    }

  getCurrentUser(callback, errorback){
    this._http.get('/current')
      .subscribe((res) => {
        const user = res.json();
        if(user){
          this.currentUser = user;
        }
        callback(user);
      },
    (err) => {
      errorback(err);
    })

  }

  addPost(post, callback, errorback){
    this._http.post('/posts', post)
      .subscribe((res) => {
        const post = res.json();
        this.posts.push(post);
        callback(post);
      },
    (err) => {
      errorback(err.json());
    })
  }

  addAnswer(answer, callback, errorback){
    this._http.post('/answers', answer)
      .subscribe((res) => {
        const answer = res.json();
        this.answer = answer;
        callback(answer);
      },
    (err) => {
      errorback(err.json());
    })
  }

  showAll(callback, errorback){
    this._http.get('/posts')
      .subscribe((res) => {
        this.posts = res.json();
        callback(this.posts);
      },
    (err) => {
      errorback(err.json());
    })
  }

   grabPost(id, callback, errorback){
    this._http.get('/posts/' + id)
      .subscribe((res) => {
        const post = res.json();
        this.post = post;
        callback(this.post);
      },
    (err) => {
      errorback(err.json());
    })
  }

/*  like(id){
    return this._http.get('/api/answers/' + id)
      .map((res) => res.json())
      .toPromise();
  }
*/
}
