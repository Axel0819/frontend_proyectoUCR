import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, Paper, TableHead, TableSortLabel, Toolbar, Typography } from '@mui/material'
import { TablePaginationActions } from './TablePaginationActions';
import { makeStyles } from '@mui/styles';

const rows = [
    {
        name: 'Primeros auxilios',
        omi: '1.20',
        cod: '589',
        duration: '18 horas',
        PricesN: '450.00',
        PricesE: '500.00'
    },
    {
        name: 'Primeros auxilios',
        omi: '1.20',
        cod: '589',
        duration: '18 horas',
        PricesN: '450.00',
        PricesE: '500.00'
    },
    {
        name: 'Primeros auxilios',
        omi: '1.20',
        cod: '589',
        duration: '18 horas',
        PricesN: '450.00',
        PricesE: '500.00'
    },
    {
        name: 'Primeros auxilios',
        omi: '1.20',
        cod: '589',
        duration: '18 horas',
        PricesN: '450.00',
        PricesE: '500.00'
    },
    {
        name: 'Primeros auxilios',
        omi: '1.20',
        cod: '589',
        duration: '18 horas',
        PricesN: '450.00',
        PricesE: '500.00'
    },
    {
        name: 'Primeros auxilios',
        omi: '1.20',
        cod: '589',
        duration: '18 horas',
        PricesN: '450.00',
        PricesE: '500.00'
    },
    {
        name: 'Primeros auxilios',
        omi: '1.20',
        cod: '589',
        duration: '18 horas',
        PricesN: '450.00',
        PricesE: '500.00'
    },
]

const useStyles = makeStyles((theme) => {
    return {
        table: {
            minWidth: 500,
            "& .MuiTableCell-head": {
                fontWeight: 600,
                // color: 'red'
            }
        },
        title: {
            "& #tableTitle": {
                fontWeight: 600,
            }
        }
    };
});

const EnhancedTableToolbar = () => {
    const classes = useStyles()
    return (
        <Toolbar
            className={classes.title}
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 }
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Información de los cursos
            </Typography>
        </Toolbar>
    );
};


export function TablePrices() {
    const classes = useStyles()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // rows per page

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar />
            <TableContainer>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Curso
                            </TableCell>
                            <TableCell>Código OMI</TableCell>
                            <TableCell>Número identificativo</TableCell>
                            <TableCell>Duración en horas</TableCell>
                            <TableCell>Precios para ciudadanos nacionales</TableCell>
                            <TableCell>Precios para ciudadanos extranjeros</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, i) => (
                            <TableRow key={row.cod + i}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.omi}
                                </TableCell>
                                <TableCell>
                                    {row.cod}
                                </TableCell>
                                <TableCell>
                                    {row.duration}
                                </TableCell>
                                <TableCell>
                                    {row.PricesN}
                                </TableCell>
                                <TableCell>
                                    {row.PricesE}
                                </TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
}
