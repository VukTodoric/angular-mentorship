export class Address {
  constructor(
    public street: string,
    private houseNumber: number,
    private city: string,
    private country: string
  ) {}
}
