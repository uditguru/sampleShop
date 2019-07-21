import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import MenuList from './menulist';
import ContentLoader from 'react-content-loader';


const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 250,
    marginTop: 10,
    marginBottom : 10
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
    right: '5vw'
  },
  mroot: {
    display: 'flex',
  },
  mpaper: {
    marginRight: theme.spacing(2),
  }
}));

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

  const [id, setId] = React.useState(null);
  const [open, setOpen] = React.useState(false);

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

   function handleScroll(e){
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("scrolled");
      
    }
   }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setData({ posts: data, isLoading: false })
      })
  }, []);



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
          <Breakpoint medium up >
            <Container className={classes.container}>
              <Card>
                <MyLoader />
              </Card>
            </Container>
          </Breakpoint>
        </div>
      ) : (
          <div onScrollCapture={handleScroll}>
            <Breakpoint medium down >
              <Container className={classes.containerSmall}>
                <Typography variant="h6" component="h6"> {data.posts.length}   Results</Typography>
                {data.posts.map((post, index) => (
                  <Card key={index} className={classes.card}>
                    <IconButton className={classes.icon} onClick={() => handleClickOpen(index)} aria-label="Menu">
                      <MoreVert />
                    </IconButton>
                    <CardContent>
                      <Typography variant="h6" component="h3" color="primary">
                        <Link className={classes.link} to={`/jobs/${post.id}`} >
                          Software Engineer II
            </Link>
                      </Typography>
                      <Typography variant="caption">
                        Palo Alto, United States
          </Typography>
                      <Typography className={classes.pos} >
                        $10k - $ 30k
          </Typography>
                      <Chip className={classes.chip} clickable={true} label="Nodejs" />
                      <Chip className={classes.chip} clickable={true} label="Reactjs" />
                      <Chip className={classes.chip} clickable={true} label="Javascript" />
                      <Chip className={classes.chip} clickable={true} label="Full-Stack" />
                      <Chip className={classes.chip} clickable={true} label="React-Native" />
                      <Chip className={classes.chip} clickable={true} label="Angular.js" />
                    </CardContent>
                  </Card>

                ))}
              </Container>
            </Breakpoint>
            <Breakpoint medium up>
              <Container className={classes.container}>
                <Typography variant="h6" component="h6">  {data.posts.length}  Results</Typography>
                {data.posts.map((post, index) => (
                  <Card key={index} className={classes.card}>
                    <IconButton className={classes.icon} onClick={() => handleClickOpen(index)} aria-label="Menu">
                      <MoreVert />
                    </IconButton>
                    <CardContent>
                      <Typography variant="h6" component="h3" color="primary">
                        <Link className={classes.link} to={`/jobs/${post.id}`} >
                          Software Engineer II
            </Link>
                      </Typography>
                      <Typography variant="caption">
                        Palo Alto, United States
          </Typography>
                      <Typography className={classes.pos} >
                        $10k - $ 30k
          </Typography>
                      <Chip className={classes.chip} clickable={true} label="Nodejs" />
                      <Chip className={classes.chip} clickable={true} label="Reactjs" />
                      <Chip className={classes.chip} clickable={true} label="Javascript" />
                      <Chip className={classes.chip} clickable={true} label="Full-Stack" />
                      <Chip className={classes.chip} clickable={true} label="React-Native" />
                      <Chip className={classes.chip} clickable={true} label="Angular.js" />
                    </CardContent>


                  </Card>

                ))}
              </Container>
            </Breakpoint>
          </div>
        )}
      <MenuList
        open={open}
        onClose={handleClose}
        id={id}
        onSelect={handleSelect}
      />
    </div>
  )
}
export default Posts;
