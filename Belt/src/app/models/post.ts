import { Answer } from './answer';
import { User } from './user';

export class Post {
  _id: string;
  title: string;
  description: string;
  _user: User;
  answers: Answer[];
  answerCount: number;

  constructor() {
    this.title = '';
    this.description = '';
    this.answers = [];
    this.answerCount = 0;
  }
}
