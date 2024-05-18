import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useWorkerStore } from "../../store/WorkersStore/WorkersStore";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import AddWorker from "../Modals/AddWorker/AddWorker"

function createData(id, fullName, login, password) {
  return { id, fullName, login, password };
}

// const rows = [
//   createData(1, "Jacob Ryan", "12 Jan 2022", "Hamburger", "5%", "8%"),
//   createData(2, "Jacob Ryan", "12 Jan 2022", "Hamburger", "5%", "8%"),
//   createData(3, "Jacob Ryan", "12 Jan 2022", "Hamburger", "5%", "8%"),
//   createData(4, "Jacob Ryan", "12 Jan 2022", "Hamburger", "5%", "8%"),
//   createData(5, "Jacob Ryan", "12 Jan 2022", "Hamburger", "5%", "8%"),
//   createData(6, "Jacob Ryan", "12 Jan 2022", "Hamburger", "5%", "8%"),
// ];
const rows = []
export default function BasicTable() {
  const { getWorkers } = useWorkerStore();
 const [workers, setWorkers] = React.useState([])
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await getWorkers();
    setWorkers(res?.data?.all_workers);
    // res?.data?.all_workers?.map((item,index)=> {
    //   rows.push(createData(item?.id, item?.full_name, item?.login_key, item?.password))
    // })
  };
  const [open, setOpen] = React.useState(false)
  const toggle = () => {
    setOpen(false)
  }
  return (
    <TableContainer className="table__container">
      <AddWorker open={open} toggle={toggle}/>
      <Table
        sx={{ minWidth: 540, background: "transparent" }}
        aria-label="simple table"
      >
        <TableHead
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.26)",
            borderRadius: "40px",
          }}
        >
          <TableRow
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.26)",
              borderRadius: "40px",
            }}
          >
            <TableCell>T/R</TableCell>
            <TableCell align="left">FullName</TableCell>
            <TableCell align="left">Login</TableCell>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left">
              <button className="table__btn" onClick={()=>setOpen(true)}>Add</button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers?.map((item,index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                borderBottom: "2px solid #A1A1A1",
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell align="right" scope="row" component="th">
                {item.full_name}
              </TableCell>
              <TableCell align="right">{item.login_key}</TableCell>
              <TableCell align="right">{item.password}</TableCell>
              <TableCell align="right">
                <button className="table__btn">
                  <MdOutlineDelete size={24} />
                  <CiEdit size={24} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
