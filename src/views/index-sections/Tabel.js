import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: "#2a2122",
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 15,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

function createData(service, price) {
    return { service, price };
}

// const rows = [
//     createData('Canapea 2 locuri', "130 lei"),
//     createData('Canapea 3 locuri', "150 lei"),
//     createData('Canapea 3 locuri - extensibila', "190 lei"),
//     createData('Sezlong canapea', "80 lei"),
//     createData('Coltar 4 locuri', "200 lei"),
//     createData('Coltar 5 locuri', "250 lei"),
//     createData('Coltar - forma U', "280 lei"),

// ];

export default function CustomizedTables({rows, StyledTableRow, StyledTableCell, titlu}) {
    return (
        <TableContainer sx ={{ maxWidth: 1095 , zIndex: 1000}} component={Paper}>
            <Table sx={{ minWidth: 50 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">{titlu}</StyledTableCell>
                        <StyledTableCell align="right">Pret</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.service}>
                            <StyledTableCell component="th" scope="row" align="left">
                                {row.service}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}