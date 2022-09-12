import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 239283,
            name: "Vini Vanisa",
            email: "vinivanini@gmail.com",
            status: "Pending",
        },
        {
            id: 238791,
            name: "Inka Wanganini",
            email: "inkavanini@gmail.com",
            status: "Approved",
        },
        {
            id: 397393,
            name: "Eca Mandidi",
            email: "ecavanini@gmail.com",
            status: "Pending",
        },
        {
            id: 729312,
            name: "Dio Tendenini",
            email: "diovanini@gmail.com",
            status: "Approved",
        },
        {
            id: 596384,
            name: "Andrey Desaynini",
            email: "andreyvanini@gmail.com",
            status: "Pending",
        },
    ]

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Name</TableCell>
          <TableCell className="tableCell">E-mail</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">{row.name}</TableCell>
            <TableCell className="tableCell">{row.email}</TableCell>
            <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default List