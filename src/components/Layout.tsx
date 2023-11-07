import { PropsWithChildren } from 'react';
import { Header, Footer } from '.';

const Layout: React.FC<PropsWithChildren<object>> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
