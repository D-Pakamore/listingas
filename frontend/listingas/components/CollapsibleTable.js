import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { getUserData, deleteItem } from './myMethods';
import axios from 'axios';

const deleteRequest = (id, setDataSet, dataSet) => {
  const userData = getUserData()
  const { headers } = userData


  axios({
    url: `http://127.0.0.1:8000/numiscorner_coins/${id}`,
    method: "DELETE",
    headers: headers,
  })
    .then((response) => {
      if (response.status > 200 && response.status < 400) {
        setDataSet(deleteItem(id, dataSet))
      }
    })
    .catch(response => { console.log(response) })
}

const restruturizeDict = (coinData) => {
  let result = []
  let groupsByFour = []

  Object.entries(coinData).map(object => {
    let dict = {}
    dict[object[0]] = object[1]

    if (object[0] != "image_set" && object[0] != "id") {
      if (groupsByFour.push(dict) === 4) {
        result.push(groupsByFour)
        groupsByFour = []
      }
    }
  });

  if (groupsByFour.length != 0) {
    result.push(groupsByFour)
  }

  return result
}

function Row(props) {
  const { row, setDataSet, dataSet } = props;
  const [open, setOpen] = React.useState(false);
  const groupsByFour = restruturizeDict(row);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ width: '20px' }}>
          <IconButton onClick={() => deleteRequest(row.id, setDataSet, dataSet)} size="small" aria-label="Delete Coin">
            <DeleteForeverTwoToneIcon></DeleteForeverTwoToneIcon>
          </IconButton>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ width: '135px' }} scope="row">
          <img
            style={{ width: "100px" }}
            src={row.image_set[0].obverse_image}
            alt="No Image"
            loading="lazy"
          />
        </TableCell>
        <TableCell scope="row">
          <img
            style={{ width: "100px" }}
            src={row.image_set[0].reverse_image}
            alt="No Image"
            loading="lazy"
          />
        </TableCell>
        <TableCell>{row.country}</TableCell>
        <TableCell>{row.denomination}</TableCell>
        <TableCell>{row.year}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                {groupsByFour.map((list, index) => (
                  <React.Fragment key={index}>
                    <TableHead>
                      <TableRow>
                        {list.map((dict, index) => (
                          <TableCell key={index} sx={{ fontWeight: "bold" }}>{Object.keys(dict)[0]}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody sx={{ height: '33px' }}>
                      <TableRow>
                        {list.map((dict, index) => (
                          <TableCell key={index}>{Object.values(dict)[0]}</TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </React.Fragment>
                ))}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ listOfDicts }) {
  const [dataSet, setDataSet] = React.useState(listOfDicts)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: "bold" }}>Obverse Image</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Reverse image</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Denomination</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSet.map((data, index) => (
            <Row key={index} row={data} setDataSet={setDataSet} dataSet={dataSet} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}