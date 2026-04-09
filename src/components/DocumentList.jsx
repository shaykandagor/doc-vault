import { FaTrash } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

function DocumentList({ docs, deleteDoc }) {
    return (
      <div className="document-list-container">
        <h2 className="document-list-heading">Documents</h2>
        {docs.length === 0 ? (
          <p>No documents yet</p>
        ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Documents</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {docs.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell component="th" scope="row">
                    {doc.name}
                  </TableCell>
                  <TableCell align="right">{doc.type}</TableCell>
                  <TableCell align="right">{doc.date}</TableCell>
                  <TableCell align="right">
                    <button className="document-list-delete-button" onClick={() => deleteDoc(doc.id)}><FaTrash /></button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        )}
      </div>
    );
  }

  export default DocumentList;