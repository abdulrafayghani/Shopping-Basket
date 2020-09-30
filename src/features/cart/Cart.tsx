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
  Paper
} from '@material-ui/core';
import React from 'react';
import { remove, removeFromBasket } from '../cart/cartSlice';
import x from '../../images/X.png';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../store';


function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

export const Cart = () => {
  const { cart, total } = useSelector((state: rootState) => state.products);
  const dispatch = useDispatch();

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
              <Table  aria-label="simple table">
                <TableHead>
                  <TableRow >
                    <TableCell style={{fontSize:'15px', color:'hotpink'}} align='center' >Shoe Name</TableCell>
                    <TableCell style={{fontSize:'15px', color:'hotpink'}} align='center'>Quantity</TableCell>
                    <TableCell style={{fontSize:'15px', color:'hotpink'}} align='center'>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((productItem, ind) => (
                    <TableRow  key={ind}>
                      <TableCell style={{color:"#00f2e2", fontWeight:'bold'}} align='center' component="th" scope="row">
                        {productItem.product.title}
                      </TableCell>
                      <TableCell style={{color:"#00f2e2"}} align="center">{productItem.quantity}</TableCell>
                      <TableCell style={{color:"#00f2e2"}} align="center">{(productItem.product.price * productItem.quantity)}</TableCell>
                      <TableCell style={{color:"#00f2e2"}} align="justify"> <Button onClick={()=> {dispatch(remove(productItem.product))}} > <img height='25px' src={x} alt=""/></Button></TableCell>
                      <TableCell style={{color:"#00f2e2"}} align='justify'> <Button onClick={()=> {dispatch(removeFromBasket(productItem.product))}} color='secondary' > Remove from Basket</Button></TableCell>
                    </TableRow>
                  ))}
            <TableRow>
            {/* <TableCell rowSpan={3} /> */}
            <TableCell align='center' style={{color:'hotpink', fontWeight:'bold'}} >Subtotal</TableCell>
            <TableCell style={{color:'#00f2e2'}} align="right">{ccyFormat(total)}</TableCell>
          </TableRow>
                </TableBody>
              </Table>
            </TableContainer>;
      </Box>
    </div>
  );
};
