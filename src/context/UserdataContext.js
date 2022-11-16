import { createContext, useReducer } from 'react'

export const UserdataContext = createContext()

export const userdataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERDATA':
            return {
                userdata: action.payload
            }
        case 'CREATE_USERDATA': 
            return {
                userdata: [action.payload, ...state.userdata]
            }
            default: 
                return state
    }
}



export const UserdataContextProvider = ({children}) => {

const [state, dispatch] = useReducer(userdataReducer, {
    userdata: null
})

    return(

     <UserdataContext.Provider value={{...state, dispatch}}>
            {children}
     </UserdataContext.Provider>

    )
}