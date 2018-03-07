import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
//import { Post } from '../../models/post';
//import { User} from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: {};
  questions: any[] = [];
  filteredQuestions;
  searchString;

  constructor(private _dataService: DataService, private _router: Router) {
   }

  ngOnInit() {
    this.user = this._dataService.getCurrentUser();
    this.searchString = "";
    this.filteredQuestions = [];
    this.getQuestions();
    this.isLoggedIn();
  }

  getQuestions(){
    return this._dataService.showAll()
      .then(questions => {
        this.questions = questions
      })
      .catch(err => console.log(err))
    }

  isLoggedIn(){
    if(this._dataService.getCurrentUser() == null){
      this._router.navigateByUrl('/login')
    }
  }

  logout(){
    this._dataService.logout();
    this._router.navigateByUrl('/login');
  }
}
