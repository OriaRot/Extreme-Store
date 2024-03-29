export interface ProductInterface {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating?: {
    count: number;
    rate: number;
  };
  title: string;
}

export interface StateInterface {
  products: ProductInterface[];
}

export interface ActionInterface {
  type: string;
  payload: unknown;
}
