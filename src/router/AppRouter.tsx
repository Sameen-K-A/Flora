import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './router';
import GeneralLayout from '@/layout/GeneralLayout';

import Home from '@/pages/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<GeneralLayout />}>
        <Route path={ROUTES.DEFAULT} element={<Navigate to={ROUTES.HOME} replace />} />
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;