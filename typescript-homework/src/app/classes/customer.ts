import { Address } from './address';
import { User } from './user';

export class Customer extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    public address: Address
  ) {
    super(id, name, email, phone);
  }

  customerInformation() {
    return `My name is ${this.name}. You can contact me via email ${this.email} or phone ${this.phone}.`;
  }

  getName() {
    return this.name;
  }
}
