import { BaseEntity } from '../interfaces/baseEntity';
export class User implements BaseEntity {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: number
  ) {}

  sayHello() {
    const greeting = 'Hello from User class';
    return greeting;
  }
}
