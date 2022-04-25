import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from './globalStyles';

import { Navbar } from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.component';
import Productos from './pages/productos/productos.component';
import Nosotros from './pages/nosotros/nosotros.component';
import Contacto from './pages/contacto/contacto.component';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros/' element={<Nosotros />} />
        <Route path='/productos/' element={<Productos />} />
        <Route path='/contacto/' element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
