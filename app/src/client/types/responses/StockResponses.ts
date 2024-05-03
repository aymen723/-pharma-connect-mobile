export type TagTypeRespData = {
  id: number;
  name: "TYPE" | "DOSAGE" | "CONSUMPTION";
};

export type TagRespData = {
  id: number;
  name: string;
  description: string;
  type: TagTypeRespData;
};

export type ProductRespData = {
  id: number;
  name: string;
  description: string;
  price: number;
  barcode: string;
  tags: TagRespData[];
};

export type Coordinates = {
  x: number;
  y: number;
  z: "NaN";
  m: "NaN";
  valid: boolean;
};

export type Location = {
  id: number;
  googleUrl?: string;
  coordinates: Coordinates;
};

export type PharmacyRespData = {
  id: number;
  name: string;
  location: Location;
  paymentSupport: boolean;
  enabled: boolean;
};

export type StockId = {
  productId: number;
  pharmacyId: number;
};

export type AvailableStockRespData = {
  id: StockId;
  product: ProductRespData;
  pharmacy: PharmacyRespData;
  price?: number | null;
};
