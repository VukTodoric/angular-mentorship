import { User } from './user.model';

export class Employee {
  constructor(public employee: User, public jobTitle: string) {}
}
