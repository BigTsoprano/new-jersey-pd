export const initialState = {

        basket: [],
            
        };
        
        export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);
    
        const reducer = (state, action) => {        
            switch(action.type) {
                case 'ADD_TO_BASKET':
                    // for adding to basket
                    return { 
                        ...state,
                        basket: [...state.basket, action.item]
                     };
                case 'REMOVE_ALL':
                    return {
                        basket: []
                    };
                case 'REMOVE_FROM_BASKET':
                    // for removing basket
                     let newBasket = [...state.basket];
    
                     const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
    
                     if (index >= 0) {
                        newBasket.splice(index, 1);
    
                     }  else {
    
                     }
    
                    return { 
                        ...state,
                        basket: newBasket 
                    };
                    default:
                return state;
            }
        }
        export default reducer;