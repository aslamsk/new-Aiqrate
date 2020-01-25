import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/navigation';
import '../layout/layout.css';

const Layout = ({ children }) => {
  return (
    <Navigation>
      {/* <main className="page-wrap">{children}</main> */}
      <main className="container">{children}</main>
    </Navigation>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
