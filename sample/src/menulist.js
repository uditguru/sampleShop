import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Posts from './postings';

export default function MenuList(props) {  
  console.log(props);
  
   return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.id && props.id.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { props.id && <img src={props.id.image} />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}