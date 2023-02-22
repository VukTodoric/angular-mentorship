import { Address } from './address';

export class Customer extends Address {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private phone: number,
    street: string,
    houseNumber: number,
    city: string,
    country: string
  ) {
    super(street, houseNumber, city, country);
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
