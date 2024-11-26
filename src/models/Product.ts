export interface ProductFromDb {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
  imgUrl: string;
}

export enum ProductCategory {
  TECH = 1,
  CLOTHING = 2,
  HOME = 3,
  FOOD = 4,
}

export interface ProductFilter {
  search?: string | null;
  category?: ProductCategory | null;
}

export interface CartProduct extends ProductFromDb {
  count: number;
}
