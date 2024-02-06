import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableRowsLoader } from "../../shared/components/TableRowsLoader";
import { BlogVM } from "./BlogCreate";

const BlogList = ({
  data,
  isLoading,
}: {
  data: BlogVM[] | null;
  isLoading: boolean;
}) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Заголовок </TableCell>
              <TableCell>Описание</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading ? (
              data
                ?.slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
                )
                ?.map((row) => (
                  <TableRow
                    hover
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/blogs/" + row.id)}
                  >
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRowsLoader rowsNum={4} />
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={data?.length ?? 0}
          page={currentPage}
          onPageChange={(event, newPage) => setCurrentPage(newPage)}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={(event) => {
            setCurrentPage(0);
            setItemsPerPage(parseInt(event.target.value, 10));
          }}
        />
      </Paper>
    </>
  );
};

export default BlogList;
