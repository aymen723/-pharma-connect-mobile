export type product = {
  id: number;
  name: string;
  descprtion: string;
  price: number;
  image?: HTMLImageElement;
};

export type Address = {
  id: number;
  address: string;
  state: string;
  city: string;
  name: string;
};
