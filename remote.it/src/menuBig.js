import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Checkbox from '@material-ui/core/Checkbox';

const drawerWidth = "20%";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  
  drawerPaper: {
    width: drawerWidth,
    top : '20%'
  }
}));

function MenuBig() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        <List>
         <ListItem>
         <Checkbox
            
            value="checkedB"
            color="primary"
          />
          <label>Visa Sponsorship</label>
         </ListItem>
         <ListItem>
         <Checkbox
            
            value="checkedB"
            color="primary"
          />
          <label>Paid Relocation</label>
         </ListItem>
         <ListItem>
         <Checkbox
            
            value="checkedB"
            color="primary"
          />
          <label>Remote only</label>
         </ListItem>
         <ListItem>
         <Checkbox
            
            value="checkedB"
            color="primary"
          />
          <label>Remote Allowed</label>
         </ListItem>
        </List>
        <Divider />
        
        <List>
        <ListItem>
         <Checkbox
            
            value="checkedB"
            color="primary"
          />
          <label>India</label>
         </ListItem>
         <ListItem>
         <Checkbox
            
            value="checkedB"
            color="primary"
          />
          <label>USA</label>
         </ListItem>
         <ListItem>
         <Checkbox
            
            value="checkedB"
            color="primary"
          />
          <label>Netherlands, Amsterdam</label>
         </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
export default MenuBig;