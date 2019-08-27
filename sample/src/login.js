import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const url = "https://still-taiga-32576.herokuapp.com/api/auth"


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

function Login(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      email : '',
      password : ''
    });
  
  function Login(props){
    if(values.email == '' || values.password == ''){
      alert("please fill all the fields")
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
        if (res[0].email == values.email) {
          window.location.href = '/home'
        }
        
      })
  }
  const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });     
    };
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        type="password"
        label="password"
        className={classes.textField}
        value={values.pass}
        onChange={handleChange('password')}
        margin="normal"
        variant="outlined"
      />
    
    <Button onClick={Login} >Login</Button>
      
      </form>
  )
}

export default Login;
