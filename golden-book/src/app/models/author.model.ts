import { User } from './interfaces/user.model';

export class Author {
  constructor(public fullname: User) {}

  getFullName(): string {
    return `${this.fullname.name} ${this.fullname.lastName}`;
  }
}
