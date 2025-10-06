export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  originalPrice: number;
  offerPercentage: number;
  stocks: number;
  images: string[];
  isPublished: boolean;
  rating: number;
  ratingCount: number;
  features: string[];
};

export interface ICategory {
  id: string;
  name: string;
  image: string;
};