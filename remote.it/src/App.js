import React from 'react';

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
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

//components

import Home from './home'
import JobDetails from './jobdetails'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));



function App() {
  const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ ...state, [side]: open });
    };

  return (
    <BreakpointProvider>
    <Router>
      <div>

      <AppBar position="sticky" color='inherit'>
       <Toolbar>
         <IconButton onClick={toggleDrawer('left', true)} edge="start" className={useStyles.menuButton} color="secondary" aria-label="Menu">
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" className={useStyles.title}>
            Remote!t
         </Typography>
         <Button style={{right : 10, position : 'absolute'}} color="primary">Login</Button>
       </Toolbar>
     </AppBar>

     <Drawer  open={state.left} style={{width: 250}} onClose={toggleDrawer('left', false)}>
     <MenuList style={{width: 250}}>
       <MenuItem component={Link} to="/" onClick={toggleDrawer('left', false)}>
           Home
        </MenuItem>
        <MenuItem component={Link} to="/about" onClick={toggleDrawer('left', false )}>
           App.js
        </MenuItem>
        <MenuItem component={Link} to="/jobs" onClick={toggleDrawer('left', false)}>
           Jobs
         </MenuItem>
       </MenuList>
     </Drawer>

     <Route path="/" exact component={Home}  />
     <Route path="/about/"  />
     <Route path="/jobs/:jobid" component={JobDetails}  />

      </div>

    </Router>
    </BreakpointProvider>
  );
}

export default App;
