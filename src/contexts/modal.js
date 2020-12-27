import React, { useReducer, createContext, useContext } from 'react';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';
import { useProductContext } from './product';
import { useModalActions } from '../actions';

const initialState = {
  modalOpen: false,
  modalProduct: {},
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalOpen: true,
        modalProduct: action.payload,
      };
    case CLOSE_MODAL:
      return {
        modalOpen: false,
        modalProduct: {},
      };
    default:
      throw new Error('Invalid action type');
  }
};

export const ModalContext = createContext(initialState);

// Custom hook for using modal context
export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const { productState } = useProductContext();
  const modalActions = useModalActions(productState, dispatch);
  const contextValue = { modalState: state, modalActions };
  return (
    <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
  );
};
