import { useUserdataContext } from "../../hooks/useUserdataContext";



const Textuserdata = ({userdata}) => {

const { dispatch } = useUserdataContext()

    const handleClick = async () => {
        const response = await fetch('/api/Userdata/' + userdata._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USERDATA', payload: json})
        }
    }

    return(
        <div className="userdata-title">
            <h1>{userdata.title}</h1>
            <p>{userdata.createdAt}</p>
            <button onClick={handleClick} >delete</button>
        </div>
    );
}

export default Textuserdata