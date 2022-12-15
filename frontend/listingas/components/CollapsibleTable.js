import * as React from 'react';
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
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Input } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


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

function Row({ row, deleteCoin, addImages, toggleShowGallery }) {
  const [open, setOpen] = React.useState(false);
  const groupsByFour = restruturizeDict(row);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ width: '20px' }}>
          <Tooltip title="Delete Coin">
            <IconButton size="small" aria-label="Delete Coin" onClick={() => deleteCoin(row.id)}>
              <DeleteForeverTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Upload Images">
            <IconButton size='small' component='label'>
              <AddPhotoAlternateIcon />
              <Input onChange={event => addImages(event, row.id)} sx={{ display: 'none' }} type='file' inputProps={{ multiple: true }} />
            </IconButton>
          </Tooltip>
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
            style={{ cursor: 'pointer', width: "100px" }}
            src={row.image_set[0].obverse_image}
            alt="No Image"
            loading="lazy"
            onClick={() => toggleShowGallery(row.id, window.pageYOffset)}
          />
        </TableCell>
        <TableCell scope="row">
          <img
            style={{ cursor: 'pointer', width: "100px" }}
            src={row.image_set[0].reverse_image}
            alt="No Image"
            loading="lazy"
            onClick={() => toggleShowGallery(row.id, window.pageYOffset)}
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

export default function CollapsibleTable({ deleteCoin, coinData, addImages, toggleShowGallery }) {

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
          {coinData.map((data, index) => (
            <Row key={index} row={data} deleteCoin={deleteCoin} addImages={addImages} toggleShowGallery={toggleShowGallery} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}