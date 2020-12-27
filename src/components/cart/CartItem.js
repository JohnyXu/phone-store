import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../../contexts';

const CartWrapper = styled.div`
  & .imgsize {
    width: 5rem;
    height: 5rem;
  }

  & .count {
    cursor: text;
  }
`;

export default function CartItem({ item }) {
  const { cartActions } = useCartContext();
  const { inc, dec, removeItemFromCart } = cartActions;
  const { id, title, img, price, total, count } = item;
  return (
    <CartWrapper className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="Product" className="img-fluid imgsize" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => dec(id)}>
            -
          </span>
          <span className="btn btn-black mx-1 count">{count}</span>
          <span className="btn btn-black mx-1" onClick={() => inc(id)}>
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-trash-icon"
          onClick={() => {
            removeItemFromCart(id);
          }}
        >
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="d-lg-none">Item total: </strong>
        <strong>${total}</strong>
      </div>
    </CartWrapper>
  );
}
