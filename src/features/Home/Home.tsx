import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../util';
import { addToBasket } from '../cart/cartSlice';
import { Box } from '@material-ui/core';
import cart from '../../images/shopping-cart.png';
import { rootState } from "../../store";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 230,
    maxWidth: 250,
    marginLeft: '50px',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const count = useSelector((state: rootState) => state.products.count ) 

  return (
    <div >
      <Box  style={{ backgroundColor: '#0f0314'}}>
        <Link to='/cart'>
          {' '}
          <Box display='flex' justifyContent='flex-end' mr="50px"   >
            {count}
          <img
            src={cart}
            alt=""
            height="50px"
          />{' '}
          </Box>
        </Link>

        <Box>
          <Box
            style={{
              minHeight: '350px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignContent: 'center',
            }}
          >
            <Typography style={{ color: '#00f2e2' }} variant="h4" gutterBottom>
              Be humble and wear Good Shoes
              <Divider style={{ backgroundColor: '#00f291' }} />
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#00f2e2', width: '500px' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              mollitia ducimus labore vero corporis ex, sint dicta quibusdam
              quisquam nesciunt, pariatur et aperiam fuga, incidunt repudiandae
              repellendus voluptatum necessitatibus magni.
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          {data.map((product, index) => {
            return (
              <Box key={index} style={{ height: '400px' }}>
                <Card
                  style={{
                    width: '340px',
                    backgroundColor: '#2c2230',
                    borderColor: 'lightblue',
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        style={{ color: '#00f291' }}
                        gutterBottom
                        variant="h6"
                        component="h2"
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        style={{ color: '#f5007f' }}
                        variant="body1"
                        component="p"
                      >
                        Price: {product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      style={{ color: '#00f2e2' }}
                      onClick={() => dispatch(addToBasket(product))}
                      size="small"
                    >
                      {product.added === false ? 'Add To Cart' : 'Added'}
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};
