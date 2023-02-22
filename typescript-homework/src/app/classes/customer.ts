import { Address } from './address';
import { User } from './user';

export class Customer extends User implements Address {
  street: string = '';
  houseNumber: number = 0;
  city: string = '';
  country: string = '';
  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    street: string,
    houseNumber: number,
    city: string,
    country: string
  ) {
    super(id, name, email, phone);
    street = this.street;
    houseNumber = this.houseNumber;
    city = this.city;
    country = this.country;
  }

  customerInformation() {
    return (
      'My name is ' +
      this.name +
      '. You can contact me via email ' +
      this.email +
      ' or phone ' +
      this.phone +
      '.'
    );
  }

  getName() {
    return this.name;
  }
}
