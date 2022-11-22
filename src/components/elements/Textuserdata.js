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
        <div className="userdata-title" 
            style={{
                display: 'flex',
                justifyContent:'space-evenly'
                }}>
<div style={{display:'flex', flexDirection:'column'}}>
            <h1>{userdata.title}</h1>
            <h2>{userdata.number}</h2>
            <p>{userdata.email}</p>
            </div>
            <div>
            <h3>{userdata.street}</h3>
            <h3>{userdata.zip}</h3>
            <h3>{userdata.county}</h3>
            <h1>{userdata.name}</h1>
            </div>
            <p>{userdata.notes}</p>
            <p>{userdata.createdAt}</p>

            <button onClick={handleClick} >
                delete
            </button>
        </div>
    );
}

export default Textuserdata