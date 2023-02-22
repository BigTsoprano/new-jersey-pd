import { useAuthContext } from "./useAuthContext";
import { useUserdataContext } from "./useUserdataContext";


export const useLogout = () => {

const {dispatch} = useAuthContext()
const {dispatch: userdataDispatch} = useUserdataContext()

const logout = () => {

 //remove token from local storage
    localStorage.removeItem('user')

// dispatch logout action
    dispatch({type: 'LOGOUT'}) 
    userdataDispatch({type: 'SET_USERDATA', payload: null})

}
return {logout}

}