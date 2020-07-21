export class Product {
  public imageUrl: string;

  constructor(
    public code: string,
    public name: string,
    public price: number,
    public available: string,
    public rating: number
  ) {}
}
