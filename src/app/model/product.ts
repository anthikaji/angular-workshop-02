export class Product {
  constructor(
    public code: string,
    public name: string,
    public price: number,
    public available: string,
    public rating: number,
    public imageUrl: string
  ) {}
}
