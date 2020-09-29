import {
  Typography,
  Box,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell, 
  makeStyles,
  Paper
} from '@material-ui/core';
import React from 'react';
import { remove, removeFromBasket } from '../cart/cartSlice';
import x from '../../images/X.png';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../store';


const useStyles = makeStyles({
  table: {
    // maxWidth: 1250,
  },
});

export const Cart = () => {
  const { products } = useSelector((state: rootState) => state);
  const dispatch = useDispatch();
  const classes = useStyles()

  return (
    <div style={{ overflow:'hidden', width:'100%', height: '100vh', backgroundColor: '#0f0314' }}>
      <Box>
        <Typography
          variant="h3"
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'yellow',
            fontWeight: 'bold',
          }}
        >
          Cart
        </Typography>
      </Box>

      <Box display='flex' >
            <TableContainer style={{backgroundColor:'#0f0314'}} component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow >
                    <TableCell style={{fontSize:'15px', color:'hotpink'}} align='center' >Shoe Name</TableCell>
                    <TableCell style={{fontSize:'15px', color:'hotpink'}} align='center'>Quantity</TableCell>
                    <TableCell style={{fontSize:'15px', color:'hotpink'}} align='center'>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product, ind) => (
                    <TableRow  key={ind}>
                      <TableCell style={{color:"#00f2e2", fontWeight:'bold'}} align='center' component="th" scope="row">
                        {product.title}
                      </TableCell>
                      <TableCell style={{color:"#00f2e2"}} align="center">{product.count}</TableCell>
                      <TableCell style={{color:"#00f2e2"}} align="center">{product.price}</TableCell>
                  <TableCell style={{color:"#00f2e2"}} align="justify"> <Button onClick={()=> {dispatch(remove(product))}} > <img height='25px' src={x} alt=""/></Button></TableCell>
                      <TableCell style={{color:"#00f2e2"}} align='justify'> <Button onClick={()=> {dispatch(removeFromBasket(product))}} color='secondary' > Remove from Basket</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>;
      </Box>
    </div>
  );
};
