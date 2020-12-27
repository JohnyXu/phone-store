import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../logo.svg';
import { Button } from '../common/Button';
import { useCartContext } from '../../contexts';

export default function Navbar() {
  const { cartState } = useCartContext();
  const { cart } = cartState;
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="Store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav">
        <li>
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <Button cart={cart.length > 0}>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          My Cart
        </Button>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
