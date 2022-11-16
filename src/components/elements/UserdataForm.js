import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUserdataContext } from '../../hooks/useUserdataContext';

function UserdataForm() {

    const {dispatch} = useUserdataContext()

    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userdata = {title}

        const response = await fetch('/api/Userdata', {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setError(null)
            console.log('new title added', json)
            dispatch({type: 'CREATE_USERDATA', payload: json})
        }
    }

  return (
    <Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="on"
  >
    <TextField id="outlined-basic" label="Outlined" variant="outlined"   
    onChange={(e) => setTitle(e.target.value) }
    value={title}
    />
   
   <button>add title</button>
  </Box>


  )
}

export default UserdataForm