import React from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductContext } from '../../../contexts';

export default function ProductList() {
  // Accessing productState
  const { productState } = useProductContext();
  const { products } = productState;
  let productItems = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="Products" />
          <div className="row">{productItems}</div>
        </div>
      </div>
    </>
  );
}
