import css from './Layout.module.css';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from '../../sections/common/Footer/Footer';
import Header from '../../sections/common/Header/Header';

const Layout = ({ children }) => {
  return (
    <div className={css['layout']}>
      <Header />
      <div className={css['container']}>
        <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
          {children}
        </Suspense>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
