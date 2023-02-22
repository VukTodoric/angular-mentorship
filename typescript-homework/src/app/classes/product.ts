export class Product {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly description: string
  ) {}

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
