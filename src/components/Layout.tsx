import { PropsWithChildren } from 'react';
import { Header, Footer, FixedMenu } from '.';

const Layout: React.FC<PropsWithChildren<{ hideOnMobileDevice?: boolean }>> = ({
  children,
  hideOnMobileDevice,
}) => (
  <>
    <Header hideOnMobileDevice={hideOnMobileDevice} />
    {children}
    <FixedMenu currentRoute="home" />
    <Footer />
  </>
);

export default Layout;
