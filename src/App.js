import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/Navbar';
import ProductList from './components/product/product-list/ProductList';
import Details from './components/product/details/Details';
import Cart from './components/cart/Cart';
import NotFound from './components/notfound/NotFound';
import Modal from './components/product/modal/Modal';

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    --mainBlue: #2a2a72;
    --lightBlue: #009ffd;
    --mainWhite: #f3f3f3;
    --mainDark: #232528;
    --mainYellow: #ffa400;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--mainWhite) !important;
    color: var(--mainDark) !important;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  .text-title {
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  .text-blue {
    color: var(--mainBlue);
  }

  .text-light-blue {
    color: var(--lightBlue);
  }

  .btn-black {
    background: transparent;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 0.8rem;
    color: var(--mainDark);
    border-radius: 0;
    border: 0.1rem solid var(--mainDark);
    transition: all 300ms linear;
    &:hover {
      background: var(--mainDark) !important;
      color: var(--mainWhite) !important;
    }
  }

  .cart-trash-icon {
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--mainYellow);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
