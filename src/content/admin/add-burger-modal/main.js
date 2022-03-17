import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const AddBurgerForm = ({handleClose, refresh}) => {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        price: ''
    })

    const {name, ingredients, price} = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = () => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(()=>{
                refresh()
                handleClose()
            })
    }
    return (
        <>
    <DialogTitle>Add burger</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        name='name'
        label="Name"
        type="text"
        fullWidth
        variant="standard"
        value={name}
        onChange={handleChange}
      />
       <TextField
        margin="dense"
        id="ingredients"
        name='ingredients'
        label="Ingredients"
        type="text"
        fullWidth
        variant="standard"
        value={ingredients}
        onChange={handleChange}
      />
        <TextField
        margin="dense"
        id="price"
        name='price'
        label="Price"
        type="number"
        fullWidth
        variant="standard"
        value={price}
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button variant='contained' onClick={handleAdd}>Add</Button>
    </DialogActions>
    </>
    )
}