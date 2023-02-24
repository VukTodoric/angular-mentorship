import { Address } from './address.model';
import { User } from './user.model';

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
