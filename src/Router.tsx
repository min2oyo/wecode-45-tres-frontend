import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import Main from './pages/Main/Main';
import Empty from './pages/Empty/Empty';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Empty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
