import { Route, Routes } from 'react-router-dom';
import Layout from '../wrappers/Layout/Layout';
import pages from '../../pages/index';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<pages.Home />} />
        <Route path="*" element={<pages.Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
