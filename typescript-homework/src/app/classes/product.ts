import { BaseEntity } from '../interfaces/baseEntity';

export class Product implements BaseEntity {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly description: string
  ) {}

  sayHello() {
    const greeting = 'Hello from Product class';
    return greeting;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }
}
