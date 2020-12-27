import React, { useReducer, createContext, useContext } from 'react';
import { storeProducts } from '../data';
import { useProductActions } from '../actions';
import { SET_PRODUCT_DETAILS } from '../actions/types';

let tempProducts = [];
storeProducts.forEach((item) => tempProducts.push({ ...item }));

const initialState = {
  products: tempProducts,
  productDetails: tempProducts[0],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
      };
    default:
      throw new Error('Invalid action type');
  }
};

export const ProductContext = createContext(initialState);

// Custom hook for using product context
export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const productActions = useProductActions(state, dispatch);
  const contextValue = { productState: state, productActions };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
