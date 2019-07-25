import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lottie from 'react-lottie';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

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


const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 250,
    marginTop: 10,
    marginBottom: 10,
    borderRadius : 15,
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
  margin: {
    position : 'fixed',
    bottom : '5%',
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
    window.scrollTo(0, 0);

    //fetch('https://jsonplaceholder.typicode.com/posts')
    //.then(res => res.json())
    //.then(data => {
    //setData({ posts: data, isLoading: false })
    //})
    setData({ posts: Data, isLoading: false });
    window.addEventListener('scroll', handleScroll);
  }, []);

  console.log(data.posts.length);


  return (
    <div>
      {data.isLoading ? (
        <div>
          <Breakpoint medium down >
            <Container className={classes.containerSmall}>
              <Card>
                <MyLoader />
              </Card>
            </Container>
          </Breakpoint>
          <Breakpoint large up >
            <Container className={classes.container}>
              <Card>
                <MyLoader />
              </Card>
            </Container>
          </Breakpoint>
        </div>
      ) : (
          <div>
            
            <Breakpoint medium down >
              <Container className={classes.containerSmall}>
                <Typography variant="button" component="h6"> {data.posts.slice(0, size + 5).length}   Results</Typography>
                {data.posts.slice(0, size + 5).map((post, index) => (
                <Slide direction="up" in={data.isLoading == false} mountOnEnter unmountOnExit>

                  <Card key={index} className={classes.card}>
                    <CardHeader
                      avatar={

                        post.company &&
                        <div style={{ height: '100%' }}>
                          <Avatar alt="Remy Sharp" src={`http://logo.clearbit.com/${post.company.website.replace(/(^\w+:|^)\/\//, '')}`} className={classes.avatar} />
                        </div>

                      }
                      action={
                        <div>
                        <IconButton onClick={() => handleClickOpen(index)} aria-label="Menu">
                          <MoreVert />
                        </IconButton>
                        </div>
                      }
                      title={
                        <Typography className={classes.jbTitle} color="textPrimary">
                          <Link className={classes.link} to={`/jobs/${index}`} >
                            {post.title.substring(0, 27)}...
                        </Link>
                        </Typography>
                      }
                      subheader={
                        <div>
                        <Typography className={classes.pos} >
                          {post.company.name}
                        </Typography>
                        <Typography style={{whiteSpace : 'pre'}} variant="caption">
                          {post.location.substring(0, 35)}...
                        </Typography>
                        </div>
                        }
                    />
                    <CardContent>
                      {post.skills.filter(onlyUnique).slice(0, 4).map((skill, id) => (
                        <Chip key={id} className={classes.chip} clickable={true} onClick={() => filterData(skill)} label={skill} />
                      ))}
                    </CardContent>
                  </Card>
                </Slide>
                ))}
                <div ref={main}> {
                  data.posts.slice(0, size + 5).length == data.posts.length ? (
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

            </Breakpoint>
            <Breakpoint large up>
              <Container className={classes.container}>
              <Typography variant="button" component="h6"> {data.posts.slice(0, size + 5).length}   Results</Typography>
                {data.posts.slice(0, size + 5).map((post, index) => (
                  <Card key={index} className={classes.card}>
                    <CardHeader
                      avatar={

                        post.company &&
                        <div style={{ height: '100%' }}>
                          <Avatar alt="Remy Sharp" src={`http://logo.clearbit.com/${post.company.website}`} className={classes.avatar} />
                        </div>

                      }
                      action={
                        <IconButton className={classes.icon} onClick={() => handleClickOpen(index)} aria-label="Menu">
                          <MoreVert />
                        </IconButton>
                      }
                      title={
                        <Typography className={classes.jbTitle} color="textPrimary">
                          <Link className={classes.link} to={`/jobs/${index}`} >
                            {post.title.substring(0, 27)}...
                        </Link>
                        </Typography>
                      }
                      subheader={
                        <div>
                        <Typography className={classes.pos} >
                          {post.company.name}
                        </Typography>
                        <Typography variant="caption">
                          {post.location}
                        </Typography>
                        </div>
                        }
                    />
                    <CardContent>



                      {post.skills.slice(0, 4).map((skill, id) => (
                        <Chip key={id} className={classes.chip} clickable={true} label={skill} />
                      ))}
                    </CardContent>
                  </Card>

                ))}
                <div ref={main}></div>
              </Container>

            </Breakpoint>
            <Container>

            </Container>
          </div>)}
      <MenuList
        open={open}
        onClose={handleClose}
        id={id}
        onSelect={handleSelect}
      />

      <Breakpoint medium down>
      <Options 
              anchorEl={anchorEl}
              onClose={handleMenuClose}
            />
      <Fab size="small" 
                color="secondary" 
                aria-label="Add" 
                className={classes.margin} 
                onClick={handleClick} 
                onClose={handleMenuClose}>
                <FilterList />
              </Fab>
      </Breakpoint>
      <Breakpoint large up>
        <MenuBig />
      </Breakpoint>
      
            
            
    </div>
  )
}

export default Posts;
