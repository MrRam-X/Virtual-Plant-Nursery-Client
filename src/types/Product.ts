export interface Product {
  _id: string;
  name: string;
  scientificName: string;
  price: number;
  description: string;
  category: string;
  discount: string;
  discountedPrice: number;
  currency: string;
  rating: number;
  careGuide: Record<string, string>;
  shippingDetails: string;
  imageUrl: string[];
  reviews: number;
  inStock: boolean;
}
