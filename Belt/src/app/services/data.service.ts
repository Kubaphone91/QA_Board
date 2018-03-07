import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {


  constructor(private _http: Http){

  }

  createUser(user){
    return this._http.post('/login', user)
      .map(data => data.json())
      .toPromise();
  }

  setCurrentUser(user){
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  addPost(question){
    return this._http.post('/new_question', question)
      .map(data => data.json())
      .toPromise();
  }

  addAnswer(answer){
    return this._http.post('/question/new-answer', answer)
      .map(data => data.json())
      .toPromise();
  }

  showAll(){
    return this._http.get('/questions')
      .map(data => data.json())
      .toPromise();
  }

  grabPost(id: string){
    return this._http.get(`/question/${id}`)
      .map(data => data.json())
      .toPromise();
   }

  increaseLikes(id: string){
    return this._http.put(`/answers/${id}`, {})
      .map(data => data.json())
      .toPromise();
  }
}
