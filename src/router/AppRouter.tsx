import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './router';
import ProductDetails from '@/pages/ProductDetails';
import GeneralLayout from '@/layout/GeneralLayout';

import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Categories from '@/pages/Categories';
import About from '@/pages/About';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<GeneralLayout />}>
        <Route path={ROUTES.DEFAULT} element={<Navigate to={ROUTES.HOME} replace />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={`${ROUTES.PRODUCTS}/:id`} element={<ProductDetails />} />
        <Route path={ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;