import { Fragment } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
