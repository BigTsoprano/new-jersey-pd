import { createContext, useReducer } from "react";

export const OrderContext = createContext();

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const orderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return { ...state, order: action.payload };
    case "REMOVE_ALL_ORDERS":
      return { ...state, user: null };
    case "REMOVE_ORDER":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, {
    order: null,
  });
  return (
    <OrderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
