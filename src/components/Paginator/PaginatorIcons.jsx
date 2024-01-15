import PropTypes from 'prop-types';
import React from 'react';

import sprite from '../../images/sprite.svg';

const PaginatorIcons = ({ iconId }) => {
  return (
    <svg width="8" height="15" fill="currentColor">
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

PaginatorIcons.propTypes = {
  iconId: PropTypes.string.isRequired,
};
export default PaginatorIcons;
