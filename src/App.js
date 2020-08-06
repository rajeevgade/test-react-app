import React from 'react';
import './App.css'; import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';

const rawData = [{ "year": 2019, "totalReturn": "31.49" }, { "year": 2018, "totalReturn": "-4.38" }, { "year": 2017, "totalReturn": "21.83" }, { "year": 2016, "totalReturn": "11.96" }, { "year": 2015, "totalReturn": "1.38" }, { "year": 2014, "totalReturn": "13.69" }, { "year": 2013, "totalReturn": "32.39" }, { "year": 2012, "totalReturn": "16.00" }, { "year": 2011, "totalReturn": "2.11" }, { "year": 2010, "totalReturn": "15.06" }, { "year": 2009, "totalReturn": "26.46" }, { "year": 2008, "totalReturn": "-37.00" }, { "year": 2007, "totalReturn": "5.49" }, { "year": 2006, "totalReturn": "15.79" }, { "year": 2005, "totalReturn": "4.91" }, { "year": 2004, "totalReturn": "10.88" }, { "year": 2003, "totalReturn": "28.68" }, { "year": 2002, "totalReturn": "-22.10" }, { "year": 2001, "totalReturn": "-11.89" }, { "year": 2000, "totalReturn": "-9.10" }, { "year": 1999, "totalReturn": "21.04" }, { "year": 1998, "totalReturn": "28.58" }, { "year": 1997, "totalReturn": "33.36" }, { "year": 1996, "totalReturn": "22.96" }, { "year": 1995, "totalReturn": "37.58" }, { "year": 1994, "totalReturn": "1.32" }, { "year": 1993, "totalReturn": "10.08" }, { "year": 1992, "totalReturn": "7.62" }, { "year": 1991, "totalReturn": "30.47" }, { "year": 1990, "totalReturn": "-3.10" }, { "year": 1989, "totalReturn": "31.69" }, { "year": 1988, "totalReturn": "16.61" }, { "year": 1987, "totalReturn": "5.25" }, { "year": 1986, "totalReturn": "18.67" }, { "year": 1985, "totalReturn": "31.73" }, { "year": 1984, "totalReturn": "6.27" }, { "year": 1983, "totalReturn": "22.56" }, { "year": 1982, "totalReturn": "21.55" }, { "year": 1981, "totalReturn": "-4.91" }, { "year": 1980, "totalReturn": "32.42" }, { "year": 1979, "totalReturn": "18.44" }, { "year": 1978, "totalReturn": "6.56" }, { "year": 1977, "totalReturn": "-7.18" }, { "year": 1976, "totalReturn": "23.84" }, { "year": 1975, "totalReturn": "37.20" }, { "year": 1974, "totalReturn": "-26.47" }, { "year": 1973, "totalReturn": "-14.66" }, { "year": 1972, "totalReturn": "18.98" }, { "year": 1971, "totalReturn": "14.31" }, { "year": 1970, "totalReturn": "4.01" }, { "year": 1969, "totalReturn": "-8.50" }, { "year": 1968, "totalReturn": "11.06" }, { "year": 1967, "totalReturn": "23.98" }, { "year": 1966, "totalReturn": "-10.06" }, { "year": 1965, "totalReturn": "12.45" }, { "year": 1964, "totalReturn": "16.48" }, { "year": 1963, "totalReturn": "22.80" }, { "year": 1962, "totalReturn": "-8.73" }, { "year": 1961, "totalReturn": "26.89" }, { "year": 1960, "totalReturn": "0.47" }, { "year": 1959, "totalReturn": "11.96" }, { "year": 1958, "totalReturn": "43.36" }, { "year": 1957, "totalReturn": "-10.78" }, { "year": 1956, "totalReturn": "6.56" }, { "year": 1955, "totalReturn": "31.56" }, { "year": 1954, "totalReturn": "52.62" }, { "year": 1953, "totalReturn": "-0.99" }, { "year": 1952, "totalReturn": "18.37" }, { "year": 1951, "totalReturn": "24.02" }, { "year": 1950, "totalReturn": "31.71" }, { "year": 1949, "totalReturn": "18.79" }, { "year": 1948, "totalReturn": "5.50" }, { "year": 1947, "totalReturn": "5.71" }, { "year": 1946, "totalReturn": "-8.07" }, { "year": 1945, "totalReturn": "36.44" }, { "year": 1944, "totalReturn": "19.75" }, { "year": 1943, "totalReturn": "25.90" }, { "year": 1942, "totalReturn": "20.34" }, { "year": 1941, "totalReturn": "-11.59" }, { "year": 1940, "totalReturn": "-9.78" }, { "year": 1939, "totalReturn": "-0.41" }, { "year": 1938, "totalReturn": "31.12" }, { "year": 1937, "totalReturn": "-35.03" }, { "year": 1936, "totalReturn": "33.92" }, { "year": 1935, "totalReturn": "47.67" }, { "year": 1934, "totalReturn": "-1.44" }, { "year": 1933, "totalReturn": "53.99" }, { "year": 1932, "totalReturn": "-8.19" }, { "year": 1931, "totalReturn": "-43.34" }, { "year": 1930, "totalReturn": "-24.90" }, { "year": 1929, "totalReturn": "-8.42" }, { "year": 1928, "totalReturn": "43.61" }, { "year": 1927, "totalReturn": "37.49" }, { "year": 1926, "totalReturn": "11.62" }];

const rows = rawData.sort((a, b) => a.year-b.year)

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'year', numeric: false, disablePadding: true, label: 'Year' },
  { id: 'totalReturn', numeric: true, disablePadding: false, label: 'Cumulative returns' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all rows' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            S&P 500 index returns
          </Typography>
        )}

      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.year);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.year)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.year}
                      </TableCell>
                      <TableCell align="right">{row.totalReturn}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}