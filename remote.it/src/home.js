import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';



import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import YogaGirl from './img/yogagirl.json';
// component
import Posts from './postings';
import Options from './options';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '5px',
    width: '80vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flex: 1,
    marginLeft: '9vw',
    marginBottom: 20
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
  }
}));

const div = {
  backgroundColor: '#3490dc',
  height: '25%'
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

  return (
    <div>
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
/>
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


      </div>
      <Divider />
      <Options />
      <Divider />
      <Posts />
    </div>
  );
}

export default Home;
