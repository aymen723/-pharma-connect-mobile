export type PaymentProduct = {
  productId: number;
  count: number;
};
export type PaymentCreationRequest = {
  pharmacyId: number;
  products: PaymentProduct[];
  delivery: boolean;
};

export type OrderFilterParams = {
  page?: number | string;
  pageSize?: number | string;
};

export type Address = {
  id: number | undefined;
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  name: string | undefined;
  phone: string | undefined;
};
