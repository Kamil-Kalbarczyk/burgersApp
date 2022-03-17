import {PageWrapper} from '../../common/page-wrapper'
import { useEffect, useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Admin = () => {
    const [ burgers, setBurgers ] = useState([]);

    useEffect(()=>{
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
            .then((response)=> response.json())
            .then(data => {
                const formattedData = Object.keys(data).map((key) => ({id: key, ...data[key]}))
                setBurgers(formattedData);
            })
    },[])

    return <PageWrapper title="Admin">
            <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {burgers.map(burger => (
             <TableRow key={burger.id}>
               <TableCell>{burger.name}</TableCell>
               <TableCell align="right">{burger.ingredients}</TableCell>
               <TableCell align="right">{burger.price}</TableCell>
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </PageWrapper>
}