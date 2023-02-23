import { Post } from './post';

export interface Book extends Post {
  dateCreated: Date;
  author: string;
  numberOfStars: string;
  category: string;
}
