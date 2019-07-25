import React, {useState , useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVert from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import Data from './data.json';
import CardContent from '@material-ui/core/CardContent';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import YogaGirl from './img/yogagirl.json';
// component
import Posts from './postings';
import Options from './options';
import { Container, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flex: 1,
    marginBottom: 10,
    marginTop : 10,
    margin : "2.5%",
    borderRadius : 15
  },
  input: {
    flex: 1,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    borderRadius : 15
  },
  typo: {
    color: 'white',
    alignContent : 'center',
    margin : '5vw',
    position : 'absolute',
    width : '50%',
    lineHeight : 1.5
  },
  lottie: {
    position : 'absolute',
  },
  card: {
    minWidth : '20em',
    height : "20%",
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20
  }
}));

const div = {
  backgroundColor: '#3490dc',
  height: '25%',
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: YogaGirl,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function Home() {

  const classes = useStyles();
  const [data, setData] = useState({ posts: [], isLoading: true });
  const [id, setId] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

  function handleClickOpen(id) {
    setOpen(true);
    setId(id)
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    //fetch('https://jsonplaceholder.typicode.com/posts')
    //.then(res => res.json())
    //.then(data => {
    //setData({ posts: data, isLoading: false })
    //})
    setData({ posts: Data, isLoading: false });
  }, []);

  return (<div>
    {/*
      <div style={div}>
        <div className={classes.typo} >
        <Typography variant="h3" component="h2">
        Looking for a job? 
        </Typography>
        <Typography variant="button" component="h1">
        Our Curated list will help you end your search right here.
        </Typography>
        </div>
        <Lottie
          options={defaultOptions}
          width={250}
          style={{float: 'right', marginRight: '5%'}}
    />*/}

         
        {/*<Container style={{display:'flex', overflowX: 'scroll', msOverflowStyle : 'none'}} >
          {data.posts.slice(0, 5).map((post, index) => (
                  <Card key={index} className={classes.card}>
                    <CardHeader
                      avatar={

                        post.company &&
                        <div style={{ height: '100%' }}>
                          <Avatar alt="Remy Sharp" src={`http://logo.clearbit.com/${post.company.website.replace(/(^\w+:|^)\/\//, '')}`} className={classes.avatar} />
                        </div>

                      }
                      action={
                        <IconButton className={classes.icon} onClick={() => handleClickOpen(index)} aria-label="Menu">
                          <MoreVert />
                        </IconButton>
                      }
                      title={
                        <Typography style={{whiteSpace :'nowrap'}} className={classes.jbTitle} color="textPrimary">
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
                        <Typography style={{whiteSpace :'nowrap'}} variant="caption">
                          {post.location}
                        </Typography>
                        </div>
                        }
                    />
                    <CardContent>



                      {post.skills.filter(onlyUnique).slice(0, 4).map((skill, id) => (
                        <Chip key={id} className={classes.chip} clickable={true} label={skill} />
                      ))}
                    </CardContent>
                  </Card>

                ))}
        </Container>
        </div>              */}

<Paper className={classes.root}>

<InputBase
  className={classes.input}
  placeholder="Search..."
  inputProps={{ 'aria-label': 'Search...' }}
/>
<IconButton className={classes.iconButton} aria-label="Search">
  <SearchIcon />
</IconButton>

</Paper>
      <Divider />
      <Options />
      <Divider />
      <Posts />
    </div>
  );
}

export default Home;
