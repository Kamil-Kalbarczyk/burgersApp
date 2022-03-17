import {AddBurgerForm} from './main'
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
        <AddBurgerForm handleClose={handleClose} />
      </Dialog>
    </>
  );
}