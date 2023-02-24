export class ApiResponse<T> {
  constructor(
    public items: T[],
    public totalCount: number,
    public page: number,
    public pageSize: number
  ) {}
}
