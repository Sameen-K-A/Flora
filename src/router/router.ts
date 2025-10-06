export const ROUTES = {
  DEFAULT: `/`,
  HOME: `/home`,
  PRODUCTS: `/products`,
  CATEGORIES: `/categories`,
  ABOUT: `/about`,
  
  NOTFOUND: `*`,
} as const;

// Helper to build product details route
export const productDetailsRoute = (id: string) => `${ROUTES.PRODUCTS}/${id}`;