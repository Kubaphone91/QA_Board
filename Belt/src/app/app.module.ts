import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { AnswerComponent } from './components/answer/answer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DataService } from './services/data.service';
import { ComponentsComponent } from './components/components.component';
import { SortByPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent,
    AnswerComponent,
    LoginComponent,
    DashboardComponent,
    ComponentsComponent,
    SearchPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
