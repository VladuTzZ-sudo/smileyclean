import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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