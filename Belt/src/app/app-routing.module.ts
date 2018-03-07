import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { AnswerComponent } from './components/answer/answer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full'},
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "new-question", component: NewPostComponent },
  { path: "view-question/:id", component: PostComponent },
  { path: "question/:id/new_answer", component: AnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
