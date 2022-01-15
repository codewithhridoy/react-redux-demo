import { ActionTypes } from "../constants/action-types";

// Here we have to export all the actions

export const setProducts = (products) => {
  // We have to return type and payload (store data in payload)
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setSelectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const setRemoveSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: product,
  };
};
