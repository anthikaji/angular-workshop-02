export class Product {
  constructor(
    public code: string,
    public name: string,
    public price: number,
    public rating: number,
    public available: boolean,
    public imageUrl: string
  ) {}
}
export const exProduct: Product[] = [
  {
    code: 'p1',
    name: 'Name 01',
    price: 1000,
    available: true,
    rating: 5,
    imageUrl: 'img1',
  },
  {
    code: 'p2',
    name: 'Name 02',
    price: 200.5,
    available: false,
    rating: 2,
    imageUrl: 'img2',
  },
  {
    code: 'p3',
    name: 'Name 03',
    price: 1200.25,
    available: true,
    rating: 5,
    imageUrl: 'img3',
  },
];
