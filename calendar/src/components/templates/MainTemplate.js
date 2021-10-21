import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './MainTemplate.styles';

const MainWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MainWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default MainWrapper;
