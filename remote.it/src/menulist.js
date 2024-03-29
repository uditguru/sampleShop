import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Posts from './postings';

export default function MenuList(props) {  
   return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Like our Postings?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please let us know if you would like to see more of such postings!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onSelect} color="primary">
            See More 
          </Button>
          <Button onClick={props.onSelect} color="secondary" autoFocus>
            See Less
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}