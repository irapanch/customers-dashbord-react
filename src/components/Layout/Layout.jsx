import HeaderMob from 'components/Header/HeaderMob/HeaderMob';
import HeaderDesc from 'components/Header/HeaderDesc/HeaderDesc';
import { Loader } from 'components/Loader';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';
import HeaderTab from 'components/Header/HeaderTab/HeaderTab';

const Layout = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <MainContainer>
      {isMobile && <HeaderMob />}
      {isTablet && <HeaderTab />}
      {isDesktop && <HeaderDesc />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
