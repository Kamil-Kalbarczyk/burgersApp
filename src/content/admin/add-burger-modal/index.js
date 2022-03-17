import { useState } from 'react';
import * as React from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Icon from '@mui/material/Icon';
import Fab from '@mui/material/Fab';

const AddBurgerContainer = styled.div`
margin-top: 15px;
align-self: flex-end;
`

export const AddBurgerModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <AddBurgerContainer>
      <Fab color="primary" onClick={handleClickOpen}>
        <Icon>add</Icon>
      </Fab>
      </AddBurgerContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add burger</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="ingredients"
            label="Ingredients"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}