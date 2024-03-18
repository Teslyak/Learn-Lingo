import propTypes from 'prop-types';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Wrap } from './Sharedlayout.styled';
import Loader from './Loader/Loader';

export const SharedLayout = ({ setNamePopUp }) => {
  return (
    <>
      <Header setNamePopUp={setNamePopUp} />
      <Wrap>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrap>
    </>
  );
};

SharedLayout.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};
