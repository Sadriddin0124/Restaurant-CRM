import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, date, product, tax, discount, total) {
  return { id, name, date, product, tax, discount, total };
}

const rows = [
  createData(1, 'Jacob Ryan', "12 Jan 2022", "Hamburger", "5%", "8%", "156$"),
  createData(2, 'Jacob Ryan', "12 Jan 2022", "Hamburger", "5%", "8%", "156$"),
  createData(3, 'Jacob Ryan', "12 Jan 2022", "Hamburger", "5%", "8%", "156$"),
  createData(4, 'Jacob Ryan', "12 Jan 2022", "Hamburger", "5%", "8%", "156$"),
  createData(5, 'Jacob Ryan', "12 Jan 2022", "Hamburger", "5%", "8%", "156$"),
  createData(6, 'Jacob Ryan', "12 Jan 2022", "Hamburger", "5%", "8%", "156$"),
];

export default function BasicTable() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650, background: "transparent" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'rgba(255, 255, 255, 0.26)', borderRadius: '40px' }}>
          <TableRow sx={{ backgroundColor: 'rgba(255, 255, 255, 0.26)', borderRadius: '40px' }}>
            <TableCell>Id</TableCell>
            <TableCell align="right">Worker name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Tax</TableCell>
            <TableCell align="right">Discount</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: '2px solid #A1A1A1', }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell align="right" scope='row' component="th">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.tax}</TableCell>
              <TableCell align="right">{row.discount}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
