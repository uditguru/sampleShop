import React, { useState, useEffect ,useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lottie from 'react-lottie';
import Paper from '@material-ui/core/Paper';

import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';

import MenuList from './menulist';
import ContentLoader from 'react-content-loader';
import Data from './data.json';
import Loader from './img/loader.json'
import Options from './options';
import { functionTypeParam } from '@babel/types';

const url = "https://still-taiga-32576.herokuapp.com/api/get/products";
const cart = "https://still-taiga-32576.herokuapp.com/api/updatecart";


const useStyles = makeStyles(theme => ({
 
  card : {
    margin : 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'green'
  },
  pos: {
    marginBottom: 12,
    color: 'green'
  },
  chip: {
    marginRight: theme.spacing(1),
    margin: 2,
  },
  media: {
    height: 140,
  },
  action: {
    overflow: 'auto'
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
    whiteSpace : 'pre'
  },
  icon: {
    position: 'absolute',
    float: 'right',
    right: '3vw'
  },
  mroot: {
    display: 'flex',
  },
  mpaper: {
    marginRight: theme.spacing(2),
  },
  fbmargin: {
    position : 'fixed',
    top : '50%',
    right : '5%',
    zIndex : 99
  },
  img: {
    height : '5vh',
    width : '5vw'
  }
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Loader,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const MyLoader = () => (
  <ContentLoader
    height={"100%"}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="17" y="26" rx="3" ry="3" width="236" height="12" />
    <rect x="17" y="50" rx="3" ry="3" width="106" height="12" />
    <rect x="17" y="73" rx="3" ry="3" width="106" height="12" />
    <rect x="17" y="97" rx="3" ry="3" width="72" height="24" />
    <rect x="17" y="97" rx="3" ry="3" width="72" height="24" />
    <rect x="113" y="97" rx="3" ry="3" width="72" height="24" />
    <rect x="207" y="97" rx="3" ry="3" width="72" height="24" />
    <rect x="302" y="97" rx="3" ry="3" width="72" height="24" />
  </ContentLoader>
)

function GridPosts(props) {
  
  const main = React.createRef();
  const classes = useStyles();
  const [data, setData] = useState({ posts: [], isLoading: true });
  const [size, setSize] = useState(0);
  const [id, setId] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const savedCallback = useRef();


  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

  function handleClickOpen(id) {
    setOpen(true);
    setId(id)
  }

  function handleSelect() {
    data.posts.splice(id, 1)
    handleClose();
  }

  function handleClose() {
    setOpen(false)
  }

  function filterData(e){
    console.log(e);
    
  } 
  function handleCart(props){
    var cartData = {
      email : 'guru.udit@gmail.com',
      sku : props.sku
    }

    fetch(cart,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartData)
})
  }

  function handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setSize(size => size + 5)
      
    }
  }

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
    setData({ products: data, isLoading: false })
    })
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
  }, []);



  return (
    <div>
      {data.isLoading ? (
        <div>
            <Container className={classes.containerSmall}>
              <Card>
                <MyLoader />
              </Card>
            </Container>
          
        </div>
      ) : (
              <Container >
                <Typography variant="button" component="h6"> {data.products.slice(0, size + 5).length}   Results</Typography>
                <Grid container spacing={1}>

                {data.products.slice(0, size + 5).map((products, index) => (
                <Grid xs={6} sm={3}>
                <Grow key={index} in={data.isLoading == false} >

                  <Card key={index} className={classes.card}>
                    <CardMedia 
                     className={classes.media}
                    image={products.image}
                    />
                  
                   <CardContent>
                   <Typography className={classes.jbTitle} color="textPrimary">
                          <Link className={classes.link} >
                            {products.name.substring(0,15)}...
                        </Link>
                        </Typography>
                      
                      
                        <div>
                        <Typography className={classes.pos} >
                          {products.type}
                        </Typography>
                        <Typography style={{whiteSpace : 'pre'}} variant="caption">
                          ${products.price}
                        </Typography>
                        </div>
                   </CardContent>
                   <Button color="primary" onClick={() => handleCart(products)} >Add to Cart</Button>
                  </Card>
                </Grow>
                </Grid>
                ))}
                </Grid>
                <div ref={main}> {
                  data.products.slice(0, size + 5).length == data.products.length ? (
                    <span>No more Data</span>
                  ) : (
                      <Lottie
                        options={defaultOptions}
                        width={150}
                        height={200}
                      />
                    )
                } </div>
              </Container>
              )}
      
      
            
            
    </div>
  )
}

export default GridPosts;
