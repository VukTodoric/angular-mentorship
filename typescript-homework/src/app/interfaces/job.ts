import { Post } from './post';

export interface Job extends Post {
  workHours: number;
  pricePerHour: number;
}
