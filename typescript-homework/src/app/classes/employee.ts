import { User } from './user';

export class Employee extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    private jobTitle: string
  ) {
    super(id, name, email, phone);
  }
}
