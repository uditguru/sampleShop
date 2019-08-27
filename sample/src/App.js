import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breakpoint, { BreakpointProvider } from 'react-socks';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Badge from '@material-ui/core/Badge';

//components

import Home from './home'
import Login from './login';

const url = "https://still-taiga-32576.herokuapp.com/api/getcart";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  shopicon: {
    position : 'aboslute',
    right : '5%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));



function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  useEffect(() => {
    var values = {
      email : 'guru.udit@gmail.com'
    }
    fetch(url, 
      {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
    }).then( res => res.json()).then(res => {
      setCount(res.length);
      setCart(res);
    })

  },[])
  return (
    <Router>
      <div>

      <AppBar position="sticky" color="inherit">
       <Toolbar>
          <Typography variant="h6" className={useStyles.title}>
            Home
         </Typography>
       </Toolbar>
       <IconButton style={{position: 'absolute', right: '5%'}} edge="end" color="inherit">
          <Badge badgeContent={count} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
     </AppBar>

     

     <Route path="/" exact component={Login}  />
     <Route path="/home/" component={Home}  />

      </div>

    </Router>
  );
}

export default App;
