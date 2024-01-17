import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { StyledLoader } from 'components/App.Styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <BallTriangle
        height={30}
        width={30}
        radius={4}
        color="rgb(22, 192, 152)"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </StyledLoader>
  );
};
