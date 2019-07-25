import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';

const drawerWidth = "20%";
const drawerHeight = "50%"

const useStyles = makeStyles(theme => ({
  root: {
      margin: 10,
    display: 'flex',
    backgroundColor : 'white',
    borderRadius :15
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  }
}));

function MenuBig() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      
    
        <List className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
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
    </Card>
  );
}
export default MenuBig;