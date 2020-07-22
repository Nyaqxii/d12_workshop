export class Product {
  public rating: number = 4;
  public available: boolean;
  public imageUrl: string;

  constructor(public code: string, public name: string, public price: number) {


  }
}