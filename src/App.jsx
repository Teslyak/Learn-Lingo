import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import './App.css';
import { SharedLayout } from './component/SharedLayout';

import { SelectorPopUp } from './component/SelectorPopUp';
import { useDispatch } from 'react-redux';
import { refreshUser } from './Redux/Auth/operations';
import { PrivateRoute } from './component/PrivateRoute';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('./Pages/Home/Home'));
const Teachers = lazy(() => import('./Pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./Pages/Favorites/Favorite'));
export function App() {
  const [namePopUp, setNamePopUp] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout setNamePopUp={setNamePopUp} />}>
          <Route index element={<Home />} />
          <Route
            path="teachers"
            element={<Teachers setNamePopUp={setNamePopUp} />}
          />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <Favorites setNamePopUp={setNamePopUp} />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>

      <SelectorPopUp namePopUp={namePopUp} onClose={() => setNamePopUp('')} />
      <Toaster />
    </>
  );
}
