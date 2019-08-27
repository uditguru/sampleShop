import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginBottom : 20
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


function Options(props) {
  

  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.onClose}
      >
        <List style={{maxHeight : '40vh', overflow : 'scroll' , overflowY : 'none'}}>
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
   
        <Divider />
        
    
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
        <div>
          <Button color="primary" style={{width :'50%'}}>Apply</Button>
          <Button color="secondary" onClick={props.onClose} style={{width :'50%'}}>Cancel</Button>
        </div>
      </StyledMenu>
    </div>
  );
}
export default Options;
