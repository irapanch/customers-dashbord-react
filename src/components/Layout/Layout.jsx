import HeaderMob from 'components/Header/HeaderMob/HeaderMob';
import HeaderTab from 'components/Header/HeaderTab/HeaderTab';
import { Loader } from 'components/Loader';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  });
  const isDesktopOrTablet = useMediaQuery({
    query: '(min-width: 501px)',
  });
  return (
    <MainContainer>
      {isMobile && <HeaderMob />}
      {isDesktopOrTablet && <HeaderTab />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
