import React from 'react';
import {} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from '../../interface/Cart.interface';
import { data } from '../../util';
import { addToBasket } from '../cart/cartSlice';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // height: '100%',
    // width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-between'
  },
  media: {
    height: 250,
  },
});

export const Home = () => {
  const classes = useStyles();
  const add = useSelector((state: ProductItem) => state.added);
  const dispatch = useDispatch();

  return (
    <div>
      <Box width='100%' height='100%' >
      <Box display='flex'  justifyContent='space-around' alignContent='space-around'>
      <Typography variant="h2" gutterBottom>
        Welcome to Shoe Store
      </Typography>
   
      <Typography variant='subtitle1' style={{width:'500px'}} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        mollitia ducimus labore vero corporis ex, sint dicta quibusdam quisquam
        nesciunt, pariatur et aperiam fuga, incidunt repudiandae repellendus
        voluptatum necessitatibus magni.
      </Typography>
      </Box>
      </Box>
      <Box
        style={{
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        {data.map((product) => {
          return (
            <Box style={{ height: '410px', alignContent: 'space-around' }}>
              <Card style={{ width: '345px' }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="secondary" component="p">
                      Price: {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => dispatch(addToBasket(product))}
                    size="small"
                    color="primary"
                  >
                    {product.added === false ? 'Add To Cart' : 'Added'}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};
