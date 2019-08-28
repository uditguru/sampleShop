import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const url = "https://still-taiga-32576.herokuapp.com/api/upload"

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      justifyContent: 'center',
      width : '100%'

    }
  }));

function Upload(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      name: '',
      description: '',
      price: '',
      image: '',
    });
  
 
  function addProducts(props){
    console.log(values);
    
      fetch(url, 
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
      })
  }
  const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });      
    };
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Description"
        className={classes.textField}
        value={values.description}
        onChange={handleChange('description')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Price"
        className={classes.textField}
        value={values.price}
        onChange={handleChange('price')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        type="file"
        label="Image URL"
        className={classes.textField}
        value={values.image}
        onChange={handleChange('image')}
        margin="normal"
        variant="outlined"
      />
    
    <Button onClick={addProducts} >Upload</Button>
      
      </form>
  )
}

export default Upload;
