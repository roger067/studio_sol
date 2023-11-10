import { PropsWithChildren } from 'react';
import { Header, Footer } from '.';

const Layout: React.FC<PropsWithChildren<{ hideOnMobileDevice?: boolean }>> = ({
  children,
  hideOnMobileDevice,
}) => (
  <>
    <Header hideOnMobileDevice={hideOnMobileDevice} />
    {children}
    <Footer />
  </>
);

export default Layout;
