
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';
import Searchbar from './Searchbar';
import { TablePagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export default function EmployTabel() {
    const { Data, FilterData, setData } = React.useContext(DataContext);
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    React.useEffect(() => {
        FilterData ? setData(FilterData) : setData(Data);
    }, [Data, FilterData]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    return (
        <>
            <Searchbar />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">ID</StyledTableCell>
                            <StyledTableCell align="right">first_name </StyledTableCell>
                            <StyledTableCell align="right">last_name </StyledTableCell>
                            <StyledTableCell align="right">date_of_birth</StyledTableCell>
                            <StyledTableCell align="right">address</StyledTableCell>
                            <StyledTableCell align="right">date_of_joining</StyledTableCell>
                            <StyledTableCell align="right">salary </StyledTableCell>
                            <StyledTableCell align="right">designation</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {Data?.length!==0?
                          Data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  align="right" onClick={() => navigate(`/employe/${row.id}`)}> {row.id}</TableCell>
                                <TableCell align="right">{row.first_name}</TableCell>
                                <TableCell align="right">{row.last_name}</TableCell>
                                <TableCell align="right">{row.date_of_birth}</TableCell>
                                <TableCell align="right"> {row.address}</TableCell>
                                <TableCell align="right"> {row.date_of_birth}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                                <TableCell align="right">{row.designation}</TableCell>
                            </TableRow>
                        ))
                        :
                        <h3>No Match found</h3>
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={Data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
}
