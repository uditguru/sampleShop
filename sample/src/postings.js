import React, { useState, useEffect ,useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lottie from 'react-lottie';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import FilterList from '@material-ui/icons/FilterList';

import Breakpoint from 'react-socks';
import MenuList from './menulist';
import ContentLoader from 'react-content-loader';
import Data from './data.json';
import Loader from './img/loader.json'
import { jsxEmptyExpression } from '@babel/types';
import Options from './options';
import MenuBig from './menuBig';

const url = "https://still-taiga-32576.herokuapp.com/api/get/products"

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 250,
    marginTop: 10,
    marginBottom: 10,
    borderRadius : 15,
  },
  avatar : {
    width : '10vh'
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
  container: {
    paddingTop: 5,
    width: '80%',
    float: 'right'
  },
  containerSmall: {
    paddingTop: 5,
  },
  action: {
    overflow: 'auto'
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
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

function Posts(props) {
  
  const main = React.createRef();
  const classes = useStyles();
  const [data, setData] = useState({ posts: [], isLoading: true });
  const [size, setSize] = useState(0);
  const [id, setId] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const savedCallback = useRef();

  


  function handleCart(props){
    
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

  function handleClickOpen(data) {
    setOpen(true);
    setId(data)
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
    console.log(data);
    })
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
  }, []);

  if (props.product !== undefined) {
    setData({ products : props.product})

  }

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
          <div>
            
              <Container className={classes.containerSmall}>
                <Typography variant="button" component="h6"> {data.products.slice(0, size + 5).length}   Results</Typography>
                {data.products.slice(0, size + 5).map((products, index) => (
                <Grow key={index} in={data.isLoading == false} >

                  <Card key={index} className={classes.card}>
                    <CardHeader
                      avatar={

                        
                        <div style={{ height: '100%' }}>
                          <img src={products.image} className={classes.avatar} />
                        </div>

                      }
                      
                      title={
                        <Typography className={classes.jbTitle} color="textPrimary">
                          <Link onClick={() => handleClickOpen(products)} className={classes.link} >
                            {products.name.substring(0, 15)}
                        </Link>
                        </Typography>
                      }
                      subheader={
                        <div>
                        <Typography className={classes.pos} >
                          {products.type}
                        </Typography>
                        <Typography style={{whiteSpace : 'pre'}} variant="caption">
                          ${products.price}
                        </Typography>
                        </div>
                        }
                    />
                     <Button color="primary" style={{float: 'right'}} onClick={() => handleCart(products)} >Add to Cart</Button>
                  </Card>
                </Grow>
                ))}
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

            
            </div>)}
      <MenuList
        open={open}
        onClose={handleClose}
        id={id}
        onSelect={handleSelect}
      />

      <Options 
    
              anchorEl={anchorEl}
              onClose={handleMenuClose}
            />
      
      
            
            
    </div>
  )
}

export default Posts;
