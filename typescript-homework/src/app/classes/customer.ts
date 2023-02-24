import { Address } from './address';
import { User } from './user';

export class Customer {
  constructor(public customer: User, public address: Address) {}

  customerInformation() {
    return `My name is ${this.getName()}. You can contact me via email ${
      this.customer.email
    } or phone ${this.customer.phone}.`;
  }

  getName() {
    return this.customer.name;
  }
}
