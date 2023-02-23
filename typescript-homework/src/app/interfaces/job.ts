import { Post } from './post';
export class Job implements Post {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public workHours: number,
    public pricePerHour: number
  ) {}

  getSalary() {
    return this.workHours * this.pricePerHour;
  }
}
