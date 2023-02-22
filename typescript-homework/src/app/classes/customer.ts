export class Customer {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private phone: number,
    private address: string
  ) {}

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
