import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import SliderComponent from './SliderComponent'

const rawData = require('./data.json');

const rowsData = rawData.sort((a, b) => a.year-b.year)

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      rows: rowsData
    }
    this.handler = this.handler.bind(this);
  }

  handler(value) {
    //console.log(value); 
    const filteredRows = rowsData.filter(f => f.year <= value[1] && f.year >= value[0])
    this.setState({
      rows: filteredRows.sort((a,b) => a.year-b.year)
    })
    
  }

  render(){
    return (
      <Container maxWidth="sm">
        <br/>
        <SliderComponent min={rowsData[0].year} max={rowsData[rowsData.length-1].year} handler={this.handler}/>
        <br/>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell align="right">Cumulative returns</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.year}</TableCell>
                  <TableCell align="right">{row.totalReturn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

export default App;