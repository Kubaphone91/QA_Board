import { User } from './user';

export class Answer {
  _id: string;
  content: string;
  description: string;
  _user: User;
  likes: number;
  _post: string;
  question: string;

  constructor(){
    this.content = '';
    this.description = '';
    this.likes = 0;
    this.question;
  }
}
