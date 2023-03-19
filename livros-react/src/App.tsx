import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'reactstrap';

function App(): ReactElement {
  return (
    <Router>
      <Navbar color="black" light expand="md">
        <Nav className="mr-auto" navbar>
          <Link className="nav-link" style={{ color: 'white' }} to="/">Lista de Livros</Link>
          <Link className="nav-link" style={{ color: 'white' }} to="/dados">Dados do Livro</Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
}

export default App;
