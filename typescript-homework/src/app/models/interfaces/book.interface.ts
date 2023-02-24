import { Post } from './post.interface';

export interface Book extends Post {
  dateCreated: Date;
  author: string;
  numberOfStars: string;
  category: string;
}
