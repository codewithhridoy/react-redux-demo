// A reducer always take the initial state and the action
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Beautiful long shirt",
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  //Switch case based on action types
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    case ActionTypes.SELECTED_PRODUCTS:
      return state;

    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return state;

    default:
      return state;
  }
};
