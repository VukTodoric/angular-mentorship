import { User } from './user.model';

export interface Reviewer {
  id: number;
  name: string;
  lastName: string;
  country: string;
  review: string;
}
