import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import HistoryTicket from "./HistoryTicket";
import { useSelector } from "react-redux";
import roundToNearestMinutesWithOptions from "date-fns/fp/roundToNearestMinutesWithOptions/index";
import Time from "react-time-format";
import Button from "@material-ui/core/Button";
import { TableFooter } from "@material-ui/core";
import semibold from "../../assets/font/sf-ui-display-semibold-58646eddcae92.otf";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  customeButon: {
    // background: " linear-gradient(45deg, #f05f57, #360940)",
  },
});

function Row(props) {
  const { row, stt } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>{stt + 1}</TableCell>
        <TableCell>{row.tenPhim}</TableCell>
        {/* <TableCell></TableCell> */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Thông tin vé
              </Typography>

              <HistoryTicket data={row} />
              {/* <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function HistoryBookedTable() {
  const classes = useRowStyles();

  const data = useSelector(
    (state) => state.historyUserProfileReducer.historyUserProfile
  );
  const dataThongTinDatVe = data.thongTinDatVe;
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastOfIndex = itemPerPage * currentPage;
  const firstOfIndex = lastOfIndex - itemPerPage;
  const dataItemperPage = dataThongTinDatVe?.slice(firstOfIndex, lastOfIndex);
  console.log(dataItemperPage);
  const handleLoadMore = () => {
    setItemPerPage(itemPerPage + 5);
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Tên Phim</TableCell>
            <TableCell>Chi tiết ghế</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataItemperPage?.map((row, index) => (
            <Row key={index} stt={index} row={row} />
          ))}
        </TableBody>
      </Table>
      <div className="text-center" style={{ margin: "10px 0px" }}>
        <Button
          variant="contained"
          color="primary"
          className={classes.customeButon}
          onClick={handleLoadMore}
        >
          Xem thêm
        </Button>
      </div>
    </TableContainer>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
