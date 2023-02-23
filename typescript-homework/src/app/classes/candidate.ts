export class Candidate {
  constructor(
    private firstName: string,
    private lastName: string,
    public birthday: Date | number
  ) {}

  getFullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
}
