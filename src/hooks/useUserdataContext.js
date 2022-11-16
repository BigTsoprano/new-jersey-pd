import { UserdataContext } from '../context/UserdataContext';
import { useContext } from 'react';

export const useUserdataContext = () => {

    const context = useContext(UserdataContext)

    if (!context) {
        throw Error('must be used inside context provider')
    }


    return context

}
